const Joi = require('joi');

const phone = Joi.object().keys({
  telephone: Joi.string().max(13).required(),
});

const instrument = Joi.object().keys({
  instrumentId: Joi.number().integer().required(),
});

const login = Joi.object().keys({
  login: Joi.string().required(),
});

const rights = Joi.object().keys({
  admin: Joi.boolean().required(),
  adherent: Joi.boolean().required(),
});

module.exports = {
  phone,
  instrument,
  login,
  rights,
};

