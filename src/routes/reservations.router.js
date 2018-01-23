const express = require('express');

const reservationsController = require('../controllers/reservations.controller');
const reservationsValidation = require('../validations/reservations.validation');
const validation = require('../validations/validate');
const errorHandler = require('../misc/error.handler');

const router = new express.Router();

router.route('/:reservationId').get(reservationsController.getReservation);
router.route('/').get(reservationsController.getAllReservations);
router.route('/').post(validation.validateBody(reservationsValidation.reservation), reservationsValidation.checkDate, reservationsController.createReservation);
router.route('/:reservationId').delete(reservationsValidation.checkRightsForReservation, reservationsController.deleteReservation);
router.use(errorHandler);

module.exports = router;
