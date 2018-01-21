const models = require('../models/relations');

async function checkAdmin(req, res, next) {
  try {
    const user = await models.user.findOne({
      where: { login: req.user.user.login },
    });
    if (user.get('admin')) {
      next();
    } else {
      res.status(403).send('Admin rights are required for this request');
    }
  } catch (e) {
    next(e);
  }
}

module.exports = {
  checkAdmin,
};

