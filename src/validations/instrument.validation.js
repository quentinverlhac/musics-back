const Joi = require('joi');

const add = Joi.object().keys({
  name: Joi.string().max(255).required(),
});

module.exports = {
  add,
};

