const db = require('../models/database');
const models = require('../models/relations');

const initializeDummyData = async () => {
  // { force: true } will drop the table if it already exists

  await db.sync({ force: true });


  const user = await models.user.create({
    login: 'jdo',
    fullName: 'John Doe',
    password: 'password',
    mail: 'john.doe@supelec.fr',
    telephone: '0600660066',
    admin: false,
    adherent: true,
  });
  await models.user.create({
    login: 'bdo',
    fullName: 'Bob Doe',
    password: 'password',
    mail: 'bob.doe@supelec.fr',
    telephone: '0600330033',
    admin: false,
    adherent: false,
  });
  await models.user.create({
    login: 'hodys',
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


  const reservation1 = await models.reservation.create({
    beginning: '2017-12-12 15:00:00',
    duration: 7200,
  });

  const reservation2 = await models.reservation.create({
    beginning: '2017-12-12 14:00:00',
    duration: 3600,
  });


  await user.addInstruments(instrument, { through: { } });
  await room.addInstruments(instrument, { through: { } });
  await user.addReservation(reservation1);
  await room.addReservation(reservation1);
  await user.addReservation(reservation2);
  await room.addReservation(reservation2);

  return reservation2;
};

module.exports = initializeDummyData;
