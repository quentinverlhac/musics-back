const express = require('express');
const usersController = require('../controllers/users.controller');
const validate = require('../validations/validate');
const usersValidation = require('../validations/users.validation');
const rightsValidation = require('../validations/rights.validation');
const errorHandler = require('../misc/error.handler');

const router = new express.Router();

router.route('/').get(usersController.getAllUsers);
router.route('/me').get(usersController.getCurrentUser);
router.route('/me').put(validate.validateBody(usersValidation.phone), usersController.updateCurrentUserPhone);
router.route('/me/instruments').post(validate.validateBody(usersValidation.instrument), usersController.addCurrentUserInstrument);
router.route('/me/instruments').delete(validate.validateBody(usersValidation.instrument), usersController.deleteCurrentUserInstrument);
router.route('/me/reservations').get(usersController.getCurrentUserReservations);
router.route('/:login').get(usersController.getUser);
router.route('/:login').put(validate.validateBody(usersValidation.rights), rightsValidation.checkAdmin, usersController.updateUserRights);
router.route('/:login/reservations').get(usersController.getUserReservations);
router.use(errorHandler);

module.exports = router;
