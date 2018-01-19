const Joi = require('joi');

function validate(schema) {
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
  validate,
};
