const { User } = require('../../database/models');
const { generateToken } = require('../middlewares/jwtToken');
const crypto = require('crypto');

const createCustomer = async ({name, email, password}) => {
  const role = 'customer'

  const hashPassword = crypto.createHash('md5').update(password).digest('hex');
  await User.create({ name, email, password: hashPassword, role});

  const token = generateToken(email, hashPassword, role);

  return {
    name,
    email,
    role,
    token,
  }
};


module.exports = {
  createCustomer,
}