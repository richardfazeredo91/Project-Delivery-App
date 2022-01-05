const joi = require('joi');

const validateUser = (req, res, next) => {
  const { body } = req;

  const { error } = joi.object({
    name: joi.string().min(12).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  }).validate(body);

  if (error) throw Error('INVALID_FIELDS');

  return next();
};

const validateLogin = (req, res, next) => {
  const { body } = req;

  const { error } = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  }).validate(body);

  if (error) throw Error('INVALID_FIELDS');

  return next();
};

module.exports = {
  validateUser,
  validateLogin,
};