const models = require('../models/relations');

// Get current user informations

async function getCurrentUser(req, res, next) {
  try {
    const user = await models.user.findOne({
      where: { login: req.user.user.login },
      include: [models.instrument],
    });
    res.send(user);
  } catch (e) {
    next(e);
  }
}

async function updateUserPhone(req, res, next) {
  try {
    const user = await models.user.findOne({ where: { login: req.user.user.login } });
    user.telephone = req.body.telephone;
    await user.save();
    res.send(user);
  } catch (e) {
    next(e);
  }
}

async function addUserInstruments(req, res, next) {
  try {
    const user = await models.user.findOne({
      where: { login: req.user.user.login },
      include: [models.instrument],
    });
    const instrument = await models.instrument.findById(req.body.instrumentId);
    await user.addInstrument(instrument, { through: { } });
    res.send(user);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getCurrentUser,
  updateUserPhone,
  addUserInstruments,
};

