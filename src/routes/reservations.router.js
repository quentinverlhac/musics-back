const express = require('express');
const reservationsController = require('../controllers/reservations.controller');

const router = new express.Router();

// TODO: implement an error handler middleware and add it to every stack

router.route('/:userId').get(reservationsController.get);
router.route('/:userId').post(reservationsController.create);

module.exports = router;
