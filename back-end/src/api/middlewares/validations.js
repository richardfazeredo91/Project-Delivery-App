const joi = require('joi');

const validateUser = (req, res, next) => {
  const { body } = req;

  const { error } = joi.object({
    name: joi.string().min(12).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  }).validate(body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  return next();
};

module.exports = {
  validateUser,
}