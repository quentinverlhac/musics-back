const db = require('../models/database');
const models = require('../models/relations');

const initializeDummyData = async () => {
  // force: true will drop the table if it already exists
  await db.sync();

  const user = await models.user.create({
    fullName: 'John Doe',
    password: 'password',
    mail: 'john.doe@supelec.fr',
    telephone: '0600660066',
    admin: false,
    adherent: true,
  });
  await models.user.create({
    fullName: 'Bob Doe',
    password: 'password',
    mail: 'bob.doe@supelec.fr',
    telephone: '0600330033',
    admin: false,
    adherent: false,
  });
  await models.user.create({
    fullName: 'Quentin Verlhac',
    password: 'password',
    mail: 'quentin.verlhac@student.ecp.fr',
    telephone: '0600220022',
    admin: true,
    adherent: true,
  });

  const instrument = await models.instrument.create({
    name: 'guitare',
  });
  await models.instrument.create({
    name: 'batterie',
  });
  await models.instrument.create({
    name: 'basse',
  });

  const room = await models.room.create({
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

  await user.addInstruments(instrument, { through: { } });
  await room.addInstruments(instrument, { through: { } });
  const something = await user.addRooms(room, { through: { beginning: '2017-12-12 14:00:00', duration: 3600 } });
  return something;
};

module.exports = initializeDummyData;
