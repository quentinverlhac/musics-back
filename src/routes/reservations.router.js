const express = require('express');
const reservationsController = require('../controllers/reservations.controller');
const reservationsValidation = require('../validations/reservations.validation');
const validation = require('../validations/validate');

const router = new express.Router();

// TODO: implement an error handler middleware and add it to every stack
// TODO: prevent to create a reservation if it is incompatible

router.route('/:reservationId').get(reservationsController.getReservation);
router.route('/:reservationId').put(validation.validateBody(reservationsValidation.date), reservationsValidation.checkDate, reservationsController.updateReservation);
router.route('/').get(reservationsController.getAllReservations);
router.route('/').post(validation.validateBody(reservationsValidation.reservation), reservationsValidation.checkDate, reservationsController.createReservation);
router.route('/:reservationId').delete(reservationsController.deleteReservation);

module.exports = router;
