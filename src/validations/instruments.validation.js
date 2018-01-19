const Joi = require('joi');

const name = Joi.object().keys({
  name: Joi.string().max(255).required(),
});

module.exports = {
  name,
};

