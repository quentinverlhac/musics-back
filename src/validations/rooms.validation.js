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

const checkDate = (req, res, next) => {
  if (Date.parse(req.body.beginning) > Date.parse(req.body.end)) {
    const err = new Error('Error: the beginning of the reservation starts after the end');
    res.status(400).send(err);
  } else {
    next();
  }
};

module.exports = {
  date,
  room,
  instrument,
  checkDate,
};

