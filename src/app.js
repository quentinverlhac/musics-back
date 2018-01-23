const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const jwt = require('express-jwt');

const publicKey = fs.readFileSync('./src/oauth.pem');

const authRouter = require('./auth/router');
const routers = require('./routers');

const app = express();


// To initialise database:
// const initialiseDatabase = require('./tests/initialiseDatabase');

// initialiseDatabase();


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(jwt({
  secret: publicKey,
  getToken: (req) => {
    if (req.get('token')) {
      return req.get('token');
    }
    return null;
  },
}).unless({ path: ['/auth'] }));


app.use('/auth', authRouter);

app.use('/reservations', routers.reservations);
app.use('/users', routers.users);
app.use('/instruments', routers.instruments);
app.use('/rooms', routers.rooms);

module.exports = app;
