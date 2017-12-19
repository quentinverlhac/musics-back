const models = require('../models/relations');

// Get current user informations

async function getCurrentUser(req, res, next) {
  try {
    const user = await models.user.findOne({ where: { login: req.user.user.login } });
    res.send(user);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getCurrentUser,
};

