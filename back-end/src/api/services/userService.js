const { User } = require('../../database/models');


const createCustomer = async ({name, email, password}) => {
  await User.create({ name, email, password, role: 'customer'});

  return {
    name,
    email,
    role: 'customer'
    // token,
  }
};


module.exports = {
  createCustomer,
}