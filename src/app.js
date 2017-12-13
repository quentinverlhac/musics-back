const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const initializeDummyData = require('./tests/dataBaseCreationTest');
const printData = require('./tests/printDataTest');
const authRouter = require('./auth/router');

const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/auth', authRouter);
initializeDummyData().then(printData);

module.exports = app;
