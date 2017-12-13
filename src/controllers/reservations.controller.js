const models = require('../models/relations');

// Get a user's reservations

async function get(req, res, next) {
  try {
    // models.reservation.findAll({
    //     where: { id: req.params.id },
    //   })
    const user = await models.user.findById(req.params.id);
    const reservations = await user.getReservations();
    console.log(reservations);
    res.send(reservations);
  } catch (e) {
    next(e);
  }
}


module.exports = {
  get,
};

