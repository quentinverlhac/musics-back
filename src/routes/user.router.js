const express = require('express');
const userController = require('../controllers/user.controller');

const router = new express.Router();

// TODO: implement an error handler middleware and add it to every stack

router.route('/me').get(userController.getCurrentUser);

module.exports = router;
