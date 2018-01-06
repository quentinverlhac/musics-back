const models = require('../models/relations');

// Get a given reservation

async function getReservation(req, res, next) {
  try {
    const reservation = await models.reservation.findById(req.params.reservationId);
    res.send(reservation);
  } catch (e) {
    next(e);
  }
}

// Edit a given reservation

async function updateReservation(req, res, next) {
  try {
    // TODO: check if the reservation can be updated
    const reservation = await models.reservation.findById(req.params.reservationId);
    reservation.beginning = req.body.beginning;
    reservation.duration = req.body.duration;
    await reservation.save();
    res.send(reservation);
  } catch (e) {
    next(e);
  }
}

// Get all reservations

async function getAllReservations(req, res, next) {
  try {
    const reservations = await models.reservation.findAll();
    res.send(reservations);
  } catch (e) {
    next(e);
  }
}

// Create a reservation

async function createReservation(req, res, next) {
  try {
    // TODO: check if reservation is available
    const user = await models.user.findById(req.body.userId);
    const room = await models.room.findById(req.body.roomId);
    const reservation = await models.reservation.create({
      beginning: req.body.beginning,
      duration: req.body.duration,
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
  updateReservation,
  getAllReservations,
  createReservation,
  deleteReservation,
};

