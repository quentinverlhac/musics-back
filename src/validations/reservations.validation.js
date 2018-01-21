const Joi = require('joi');

const date = Joi.object().keys({
  beginning: Joi.date().required(),
  end: Joi.date().required(),
});

const reservation = Joi.object().keys({
  userId: Joi.number().integer(),
  roomId: Joi.number().integer(),
  beginning: Joi.date().required(),
  end: Joi.date().required(),
});

const checkDate = (req, res, next) => {
  if (Date.parse(req.body.beginning) > Date.parse(req.body.end)) {
    res.status(400).send('Error: the beginning of the reservation starts after the end');
  } else {
    next();
  }
};

module.exports = {
  date,
  reservation,
  checkDate,
};
