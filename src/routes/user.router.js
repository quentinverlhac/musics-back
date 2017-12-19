const express = require('express');
const userController = require('../controllers/user.controller');

const router = new express.Router();

// TODO: implement an error handler middleware and add it to every stack

router.route('/me').get(userController.getCurrentUser);
router.route('/me').put(userController.updateCurrentUserPhone);
router.route('/me/instruments').post(userController.addUserInstrument);
router.route('/me/instruments').delete(userController.deleteUserInstrument);
router.route('/:login').get(userController.getUser);
router.route('/:login').put(userController.updateUserRights);

module.exports = router;
