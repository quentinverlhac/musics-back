const Joi = require('joi');

const models = require('../models/relations');
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
  try {
    if (Date.parse(req.body.beginning) > Date.parse(req.body.end)) {
      res.status(400).send('Error: the beginning of the reservation starts after the end');
    } else {
      const availableRooms = await searchAvailableRooms.search(req.body.beginning, req.body.end);
      const availableIds = availableRooms.map(entity => entity.dataValues.id);
      const id = req.body.roomId;
      if (availableIds.includes(id)) {
        next();
      } else {
        res.status(400).send('Error: the room is not available');
      }
    }
  } catch (e) {
    next(e);
  }
};

async function checkRightsForReservation(req, res, next) {
  try {
    const currentUser = await models.user.findOne({
      where: { login: req.user.user.login },
    });
    if (currentUser.get('adherent')) {
      let id = req.body.userId;
      if (req.params.reservationId) {
        const reservationToCheck = await models.reservation.findById(req.params.reservationId);
        if (reservationToCheck) {
          id = reservationToCheck.userId;
        } else {
          res.status(404).send('Reservation not found');
        }
      }
      if (currentUser.get('admin')) {
        next();
      } else if (currentUser.get('id') === id) {
        next();
      } else {
        res.status(403).send('Unauthorized request: The login sent is not the login of connected user (you), and you don\'t have admin rights');
      }
    } else {
      res.status(403).send('Unauthorized request: the connect user is not adherent to MUSICS');
    }
  } catch (e) {
    next(e);
  }
}

module.exports = {
  date,
  reservation,
  checkDate,
  checkRightsForReservation,
};
