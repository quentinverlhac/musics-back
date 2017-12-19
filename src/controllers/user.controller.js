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

async function getUser(req, res, next) {
  try {
    const user = await models.user.findOne({
      where: { login: req.params.login },
      include: [models.instrument],
    });
    res.send(user);
  } catch (e) {
    next(e);
  }
}

async function updateUserRights(req, res, next) {
  try {
    const user = await models.user.findOne({ where: { login: req.params.login } });
    user.adherent = req.body.adherent;
    user.admin = req.body.admin;
    await user.save();
    res.send(user);
  } catch (e) {
    next(e);
  }
}

async function updateCurrentUserPhone(req, res, next) {
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
    });
    const instrument = await models.instrument.findById(req.body.instrumentId);
    await user.addInstrument(instrument, { through: { } });
    const userInstruments = await models.user.findOne({
      where: { login: req.user.user.login },
      include: [models.instrument],
    });
    res.send(userInstruments);
  } catch (e) {
    next(e);
  }
}

async function deleteUserInstruments(req, res, next) {
  try {
    const user = await models.user.findOne({
      where: { login: req.user.user.login },
      include: [models.instrument],
    });
    const instrument = await models.instrument.findById(req.body.instrumentId);
    await user.removeInstrument(instrument, { through: { } });
    const userInstruments = await models.user.findOne({
      where: { login: req.user.user.login },
      include: [models.instrument],
    });
    res.send(userInstruments);
  } catch (e) {
    next(e);
  }
}


module.exports = {
  getCurrentUser,
  getUser,
  updateUserRights,
  updateCurrentUserPhone,
  addUserInstruments,
  deleteUserInstruments,
};

