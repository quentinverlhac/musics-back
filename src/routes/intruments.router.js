const express = require('express');

const instrumentsController = require('../controllers/instruments.controller');
const validate = require('../validations/validate');
const instrumentsValidation = require('../validations/instruments.validation');
const rightsValidation = require('../validations/rights.validation');
const errorHandler = require('../misc/error.handler');

const router = new express.Router();

router.route('/').get(instrumentsController.getAllInstruments);
router.route('/').post(validate.validateBody(instrumentsValidation.name), rightsValidation.checkAdmin, instrumentsController.addInstrument);
router.use(errorHandler);

module.exports = router;
