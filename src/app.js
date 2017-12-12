const express = require('express');
const initializeDummyDate = require('./tests/dataBaseCreationTest');
const printData = require('./tests/printDataTest');

const app = express();

initializeDummyDate().then(printData);

module.exports = app;

