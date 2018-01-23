const Sequelize = require('sequelize');

const models = require('../models/relations');

// Get a given reservation

async function getReservation(req, res, next) {
  try {
    const reservation = await models.reservation.findById(req.params.reservationId, {
      include: [models.user],
    });
    res.send(reservation);
  } catch (e) {
    next(e);
  }
}

// Get all reservations

async function getAllReservations(req, res, next) {
  const Op = Sequelize.Op;
  try {
    const reservations = await models.reservation.findAll({
      include: [models.user, models.room],
      where: {
        beginning: {
          [Op.gte]: Date.now(),
        },
      },
    });
    res.send(reservations);
  } catch (e) {
    next(e);
  }
}

// Create a reservation

async function createReservation(req, res, next) {
  try {
    const user = await models.user.findOne({
      where: {
        login: req.user.user.login,
      },
    });
    const room = await models.room.findById(req.body.roomId);
    const reservation = await models.reservation.create({
      beginning: req.body.beginning,
      end: req.body.end,
    });
    await user.addReservation(reservation);
    await room.addReservation(reservation);
    res.send(reservation);
  } catch (e) {
    next(e);
  }
}

// Delete a given reservation

async function deleteReservation(req, res, next) {
  try {
    const reservation = await models.reservation.findById(req.params.reservationId);
    const int = await reservation.destroy();
    res.send(int);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getReservation,
  getAllReservations,
  createReservation,
  deleteReservation,
};

