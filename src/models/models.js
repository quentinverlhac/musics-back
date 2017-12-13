const Sequelize = require('sequelize');
const db = require('./database');

const user = db.define('user', {
  login: {
    type: Sequelize.STRING,
  },
  fullName: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  mail: {
    type: Sequelize.STRING,
  },
  telephone: {
    type: Sequelize.STRING,
  },
  admin: {
    type: Sequelize.BOOLEAN,
  },
  adherent: {
    type: Sequelize.BOOLEAN,
  },
});

const room = db.define('room', {
  number: {
    type: Sequelize.STRING,
  },
  capacity: {
    type: Sequelize.INTEGER,
  },
  photoPath: {
    type: Sequelize.STRING,
  },
  purpose: {
    type: Sequelize.STRING,
  },
  restricted: {
    type: Sequelize.BOOLEAN,
  },
});

const reservation = db.define('reservation', {
  beginning: {
    type: Sequelize.DATE,
  },
  duration: {
    // in seconds
    type: Sequelize.INTEGER,
  },
});

const instrument = db.define('instrument', {
  // id: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  name: {
    type: Sequelize.STRING,
  },
});

const roomInstrument = db.define('roomInstrument', {
  number: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

module.exports = {
  user,
  room,
  reservation,
  instrument,
  roomInstrument,
};
