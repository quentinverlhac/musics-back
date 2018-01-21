const express = require('express');
const roomsController = require('../controllers/rooms.controller');
const validation = require('../validations/validate');
const roomsValidation = require('../validations/rooms.validation');
const rightsValidation = require('../validations/rights.validation');

const router = new express.Router();

router.route('/').get(roomsController.getAllRooms);
router.route('/availables').post(validation.validateBody(roomsValidation.date), roomsValidation.checkDate, roomsController.getAllAvailableRooms);
router.route('/:roomId').get(roomsController.getRoom);
router.route('/:roomId').put(validation.validateBody(roomsValidation.room), rightsValidation.checkAdmin, roomsController.updateRoom);
router.route('/:roomId/instruments').post(validation.validateBody(roomsValidation.instrument), rightsValidation.checkAdmin, roomsController.addRoomInstrument);
router.route('/:roomId/instruments').delete(validation.validateBody(roomsValidation.instrument), rightsValidation.checkAdmin, roomsController.deleteRoomInstrument);

module.exports = router;
