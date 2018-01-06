const express = require('express');
const instrumentsController = require('../controllers/instruments.controller');

const router = new express.Router();

// TODO: implement an error handler middleware and add it to every stack

router.route('/').get(instrumentsController.getAllInstruments);
router.route('/').post(instrumentsController.addInstrument);

module.exports = router;
