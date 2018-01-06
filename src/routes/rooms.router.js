const express = require('express');
const roomsController = require('../controllers/rooms.controller');

const router = new express.Router();

// TODO: implement an error handler middleware and add it to every stack

router.route('/:roomId').put(roomsController.updateRoom);
router.route('/:roomId').get(roomsController.getRoom);
router.route('/:roomId/instruments').post(roomsController.addRoomInstrument);
router.route('/:roomId/instruments').delete(roomsController.deleteRoomInstrument);

module.exports = router;
