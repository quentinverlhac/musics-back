const express = require('express');
const initializeDummyData = require('./tests/dataBaseCreationTest');
const printData = require('./tests/printDataTest');

const app = express();

initializeDummyData().then(printData);

module.exports = app;
