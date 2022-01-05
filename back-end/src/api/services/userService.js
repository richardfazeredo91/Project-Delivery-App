const { User } = require('../../database/models');
const { generateToken } = require('../middlewares/jwtToken');


const createCustomer = async ({name, email, password}) => {
  const role = 'customer'
  await User.create({ name, email, password, role});

  const token = generateToken(email, password, role);

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