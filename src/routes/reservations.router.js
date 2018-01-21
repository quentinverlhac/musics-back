const express = require('express');
const reservationsController = require('../controllers/reservations.controller');
const reservationsValidation = require('../validations/reservations.validation');
const validation = require('../validations/validate');

const router = new express.Router();

router.route('/:reservationId').get(reservationsController.getReservation);
router.route('/').get(reservationsController.getAllReservations);
router.route('/').post(validation.validateBody(reservationsValidation.reservation), reservationsValidation.checkDate, reservationsValidation.checkRightsForReservation, reservationsController.createReservation);
router.route('/:reservationId').delete(reservationsValidation.checkRightsForReservation, reservationsController.deleteReservation);

module.exports = router;
