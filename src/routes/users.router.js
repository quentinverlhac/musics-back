const express = require('express');
const usersController = require('../controllers/users.controller');

const router = new express.Router();

// TODO: implement an error handler middleware and add it to every stack

router.route('/').get(usersController.getAllUsers);
router.route('/me').get(usersController.getCurrentUser);
router.route('/me').put(usersController.updateCurrentUserPhone);
router.route('/me/instruments').post(usersController.addCurrentUserInstrument);
router.route('/me/instruments').delete(usersController.deleteCurrentUserInstrument);
router.route('/me/reservations').get(usersController.getCurrentUserReservations);
router.route('/:login').get(usersController.getUser);
router.route('/:login').put(usersController.updateUserRights);
router.route('/:login/reservations').get(usersController.getUserReservations);

module.exports = router;
