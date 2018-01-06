const express = require('express');
const roomsController = require('../controllers/rooms.controller');

const router = new express.Router();

// TODO: implement an error handler middleware and add it to every stack

router.route('/:login/instruments').post(roomsController.addRoomInstrument);
router.route('/:login/instruments').delete(roomsController.deleteRoomInstrument);
router.route('/:login').get(roomsController.getRoom);
router.route('/:login').put(roomsController.updateRoom);

module.exports = router;
