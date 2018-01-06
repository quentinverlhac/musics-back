const models = require('../models/relations');

// Get all the instruments

async function getAllInstruments(req, res, next) {
  try {
    const instruments = await models.instrument.findAll();
    res.send(instruments);
  } catch (e) {
    next(e);
  }
}

// Add an instrument

async function addInstrument(req, res, next) {
  try {
    const instrument = await models.instrument.create({ name: req.body.name });
    res.send(instrument);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getAllInstruments,
  addInstrument,
};

