const Joi = require('joi');

const date = Joi.object().keys({
  beginning: Joi.date().required(),
  end: Joi.date().required(),
});

const room = Joi.object().keys({
  capacity: Joi.number().integer(),
  photoPath: Joi.string().uri(),
  purpose: Joi.string(),
  restricted: Joi.boolean(),
});

const instrument = Joi.object().keys({
  instrumentId: Joi.number().integer().required(),
});

module.exports = {
  date,
  room,
  instrument,
};

