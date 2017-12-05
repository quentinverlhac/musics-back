const Sequelize = require('sequelize');
const db = require('./database');

const user = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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
    type: Sequelize.DATE,
  },
});

const instrument = db.define('instrument', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = {
  user,
  room,
  reservation,
  instrument,
};
