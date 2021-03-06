const Sequelize = require('sequelize');

const models = require('../models/relations');

async function search(beginning, end) {
  const Op = Sequelize.Op;
  const uncompatibleReservations = await models.reservation.findAll({
    where: {
      [Op.and]: [
        {
          beginning: {
            [Op.lt]: new Date(Date.parse(end)),
          },
        },
        {
          end: {
            [Op.gt]: new Date(Date.parse(beginning)),
          },
        },
      ],
    },
  });
  const availableRooms = await models.room.findAll({
    where: {
      [Op.and]: [
        {
          id: {
            [Op.notIn]: uncompatibleReservations.map(entity => entity.get('roomId')),
          },
        },
        {
          restricted: false,
        },
      ],
    },
    include: [models.instrument],
  });
  return availableRooms;
}

module.exports = {
  search,
};

