const models = require('../models/relations');

// Get a user's reservations

async function get(req, res, next) {
  try {
    const user = await models.user.findById(req.params.userId);
    const reservations = await user.getReservations();
    console.log(reservations);
    res.send(reservations);
  } catch (e) {
    next(e);
  }
}

// Create a user's reservation

async function create(req, res, next) {
  try {
    // TODO: check if reservation is available
    const user = await models.user.findById(req.params.userId);
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


module.exports = {
  get,
  create,
};

