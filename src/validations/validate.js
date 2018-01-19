const Joi = require('joi');

function validateBody(schema) {
  return (req, res, next) => {
    Joi.validate(req.body, schema, (err) => {
      if (err === null) {
        next();
      } else {
        res.status(400).send(err);
      }
    });
  };
}

module.exports = {
  validateBody,
};
