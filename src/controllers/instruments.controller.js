const models = require('../models/relations');

// Get instruments

async function getInstruments(req, res, next) {
  try {
    const instruments = await models.instrument.findAll();
    res.send(instruments);
  } catch (e) {
    next(e);
  }
}


module.exports = {
  getInstruments,
};

