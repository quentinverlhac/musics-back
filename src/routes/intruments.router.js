const express = require('express');

const instrumentsController = require('../controllers/instruments.controller');
const validate = require('../validations/validate');
const instrumentsValidation = require('../validations/instruments.validation');
const rightsValidation = require('../validations/rights.validation');

const router = new express.Router();

// TODO: implement an error handler middleware and add it to every stack

router.route('/').get(instrumentsController.getAllInstruments);
router.route('/').post(validate.validateBody(instrumentsValidation.name), rightsValidation.checkAdmin, instrumentsController.addInstrument);

module.exports = router;
