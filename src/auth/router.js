const express = require('express');

const auth = require('./auth');

const router = express.Router();

router.post('/', auth);

module.exports = router;

