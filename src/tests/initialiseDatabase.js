const db = require('../models/database');
const models = require('../models/relations');

const initialiseDatabase = async () => {
  // { force: true } will drop the table if it already exists

  await db.sync({ force: true });

  const constant = await models.user.create({
    login: 'zion_con',
    fullName: 'Constant Zion',
    mail: 'constant.zion@supelec.fr',
    telephone: '0600110011',
    admin: false,
    adherent: false,
  });

  const quentin = await models.user.create({
    login: '2016verlhacq',
    fullName: 'Quentin Verlhac',
    mail: 'quentin.verlhac@student.ecp.fr',
    telephone: '0600220022',
    admin: true,
    adherent: true,
  });

  const remi = await models.user.create({
    login: '2016calixter',
    fullName: 'Rémi Calixte',
    mail: 'remi.calixte@student.ecp.fr',
    telephone: '0600330033',
    admin: true,
    adherent: true,
  });


  await models.user.create({
    login: '2016vignesh',
    fullName: 'Hugo Saint-Vignes',
    mail: 'hugo.saint-vignes@student.ecp.fr',
    telephone: '0600440044',
    admin: false,
    adherent: false,
  });

  await models.user.create({
    login: '2016renaultt',
    fullName: 'Thomas Renault',
    mail: 'thomas.renault@student.ecp.fr',
    telephone: '0600550055',
    admin: false,
    adherent: false,
  });

  await models.user.create({
    login: '2016sirieyse',
    fullName: 'Elwyn Sirieys',
    mail: 'elwyn.sirieys@student.ecp.fr',
    telephone: '0600660066',
    admin: false,
    adherent: false,
  });

  const chant = await models.instrument.create({
    name: 'chant',
  });
  const guitare = await models.instrument.create({
    name: 'guitare',
  });
  const basse = await models.instrument.create({
    name: 'basse',
  });
  const batterie = await models.instrument.create({
    name: 'batterie',
  });
  const piano = await models.instrument.create({
    name: 'piano',
  });
  await models.instrument.create({
    name: 'violon',
  });
  const alto = await models.instrument.create({
    name: 'violon alto',
  });
  await models.instrument.create({
    name: 'violoncelle',
  });
  await models.instrument.create({
    name: 'contrebasse',
  });
  await models.instrument.create({
    name: 'trompette',
  });
  await models.instrument.create({
    name: 'saxophone',
  });
  await models.instrument.create({
    name: 'trombone',
  });
  await models.instrument.create({
    name: 'euphonium',
  });
  await models.instrument.create({
    name: 'soubasophone',
  });
  await models.instrument.create({
    name: 'flûte traversière',
  });
  const clarinette = await models.instrument.create({
    name: 'clarinette',
  });
  await models.instrument.create({
    name: 'hautbois',
  });


  const e008 = await models.room.create({
    number: 'E008',
    capacity: 3,
    photoPath: 'http:url.com',
    purpose: 'Piano',
    restricted: false,
  });
  const e010 = await models.room.create({
    number: 'E010',
    capacity: 10,
    photoPath: 'http:url.com',
    purpose: 'Musique actuelle',
    restricted: false,
  });
  const e012 = await models.room.create({
    number: 'E012',
    capacity: 8,
    photoPath: 'http:url.com',
    purpose: 'Rock et Métal',
    restricted: false,
  });
  const e091 = await models.room.create({
    number: 'E091',
    capacity: 20,
    photoPath: 'http:url.com',
    purpose: 'Polyvalent',
    restricted: false,
  });
  const e090 = await models.room.create({
    number: 'E090',
    capacity: 2,
    photoPath: 'http:url.com',
    purpose: 'Piano',
    restricted: false,
  });
  const e092 = await models.room.create({
    number: 'E092',
    capacity: 8,
    photoPath: 'http:url.com',
    purpose: 'Musique actuelle',
    restricted: false,
  });
  const e094 = await models.room.create({
    number: 'E094',
    capacity: 7,
    photoPath: 'http:url.com',
    purpose: 'Enregistrement',
    restricted: true,
  });


  const reservation1 = await models.reservation.create({
    beginning: '2018-01-23 18:00:00',
    end: '2018-01-23 19:00:00',
  });


  const reservation2 = await models.reservation.create({
    beginning: '2018-01-24 14:00:00',
    end: '2018-01-15 15:00:00',
  });

  const reservation3 = await models.reservation.create({
    beginning: '2018-01-23 18:00:00',
    end: '2018-01-23 19:00:00',
  });

  await constant.addInstruments(alto, { through: { } });

  await quentin.addInstruments(batterie, { through: { } });
  await quentin.addInstruments(basse, { through: { } });

  await remi.addInstruments(clarinette, { through: { } });

  await e008.addInstruments(piano, { through: { } });

  await e010.addInstruments(chant, { through: { } });
  await e010.addInstruments(guitare, { through: { } });
  await e010.addInstruments(basse, { through: { } });
  await e010.addInstruments(batterie, { through: { } });

  await e012.addInstruments(chant, { through: { } });
  await e012.addInstruments(guitare, { through: { } });
  await e012.addInstruments(basse, { through: { } });
  await e012.addInstruments(batterie, { through: { } });

  await e090.addInstruments(piano, { through: { } });

  await e091.addInstruments(chant, { through: { } });
  await e091.addInstruments(guitare, { through: { } });
  await e091.addInstruments(basse, { through: { } });
  await e091.addInstruments(batterie, { through: { } });

  await e092.addInstruments(chant, { through: { } });
  await e092.addInstruments(guitare, { through: { } });
  await e092.addInstruments(basse, { through: { } });
  await e092.addInstruments(batterie, { through: { } });

  await e094.addInstruments(chant, { through: { } });
  await e094.addInstruments(guitare, { through: { } });
  await e094.addInstruments(basse, { through: { } });
  await e094.addInstruments(batterie, { through: { } });

  await quentin.addReservation(reservation1);
  await e010.addReservation(reservation1);

  await quentin.addReservation(reservation2);
  await e092.addReservation(reservation2);

  await remi.addReservation(reservation3);
  await e008.addReservation(reservation3);

  return reservation3;
};

module.exports = initialiseDatabase;
