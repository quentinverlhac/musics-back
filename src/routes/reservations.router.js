const express = require('express');
const reservationsController = require('../controllers/reservations.controller');

const router = new express.Router();

// TODO: implement an error handler middleware and add it to every stack

router.route('/:reservationId').get(reservationsController.getReservation);
router.route('/:reservationId').put(reservationsController.updateReservation);
router.route('/').get(reservationsController.getAllReservations);
router.route('/').post(reservationsController.createReservation);
router.route('/:reservationId').delete(reservationsController.deleteReservation);

module.exports = router;
