const express = require('express');
const roomsController = require('../controllers/rooms.controller');
const validation = require('../validations/validate');
const roomsValidation = require('../validations/rooms.validation');

const router = new express.Router();

// TODO: implement an error handler middleware and add it to every stack

router.route('/').get(roomsController.getAllRooms);
router.route('/availables').post(validation.validateBody(roomsValidation.date), roomsController.getAllAvailableRooms);
router.route('/:roomId').get(roomsController.getRoom);
router.route('/:roomId').put(validation.validateBody(roomsValidation.room), roomsController.updateRoom);
router.route('/:roomId/instruments').post(validation.validateBody(roomsValidation.instrument), roomsController.addRoomInstrument);
router.route('/:roomId/instruments').delete(validation.validateBody(roomsValidation.instrument), roomsController.deleteRoomInstrument);

module.exports = router;
