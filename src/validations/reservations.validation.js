const Joi = require('joi');
const searchAvailableRooms = require('../misc/search.available.rooms');

const date = Joi.object().keys({
  beginning: Joi.date().required(),
  end: Joi.date().required(),
});

const reservation = Joi.object().keys({
  userId: Joi.number().integer(),
  roomId: Joi.number().integer(),
  beginning: Joi.date().required(),
  end: Joi.date().required(),
});

const checkDate = async (req, res, next) => {
  if (Date.parse(req.body.beginning) > Date.parse(req.body.end)) {
    res.status(400).send('Error: the beginning of the reservation starts after the end');
  } else {
    const availableRooms = await searchAvailableRooms.search(req.body.beginning, req.body.end);
    const availableIds = availableRooms.map(entity => entity.dataValues.id);
    if (availableIds.includes(req.body.roomId)) {
      next();
    } else {
      res.status(400).send('Error: the room is not available');
    }
  }
};

module.exports = {
  date,
  reservation,
  checkDate,
};
