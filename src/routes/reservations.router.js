const express = require('express');
const controller = require('../controllers');

const router = new express.Router();

router.route('/:userId').get(controller.reservations.get);

module.exports = router;
