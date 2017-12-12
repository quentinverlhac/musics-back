const db = require('../models/database');
const models = require('../models/models');

const initializeDummyData = async () => {
  // force: true will drop the table if it already exists
  await db.sync();

  await models.user.create({
    firstName: 'John Hancock',
    password: 'password',
    mail: 'john.hancock@supelec.fr',
    telephone: '0600660066',
    admin: false,
    adherent: true,
  });
  await models.user.create({
    firstName: 'Bob Hancock',
    password: 'password',
    mail: 'bob.hancock@supelec.fr',
    telephone: '0600330033',
    admin: false,
    adherent: false,
  });
  await models.user.create({
    firstName: 'Quentin Verlhac',
    password: 'password',
    mail: 'quentin.verlhac@student.ecp.fr',
    telephone: '0600220022',
    admin: true,
    adherent: true,
  });

  await models.instrument.create({
    name: 'guitare',
  });
  await models.instrument.create({
    name: 'batterie',
  });
  await models.instrument.create({
    name: 'basse',
  });

  await models.room.create({
    number: 'E008',
    capacity: 3,
    photoPath: 'url',
    purpose: 'Musique classique',
    restricted: false,
  });
  await models.room.create({
    number: 'E010',
    capacity: 10,
    photoPath: 'url',
    purpose: 'Musique actuelle',
    restricted: false,
  });
  await models.room.create({
    number: 'E094',
    capacity: 8,
    photoPath: 'url',
    purpose: 'Enregistrement',
    restricted: true,
  });
};

module.exports = initializeDummyData;
