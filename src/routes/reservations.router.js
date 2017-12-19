const express = require('express');
const controller = require('../controllers');

const router = new express.Router();

router.route('/:userId').get(controller.reservations.get);
router.route('/:userId').post(controller.reservations.create);

module.exports = router;
