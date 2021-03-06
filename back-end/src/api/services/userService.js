const crypto = require('crypto');
const { User } = require('../../database/models');
const { generateToken } = require('../middlewares/jwtToken');

const createCustomer = async ({ name, email, password }) => {
  const role = 'customer';

  const hashPassword = crypto.createHash('md5').update(password).digest('hex');
  
  const user = await User.create({ name, email, password: hashPassword, role });

  const token = generateToken(email, user.id, role);
 
  return {
    name,
    email,
    role,
    token,
  };
};

const loginUser = async ({ email, password }) => {
  const hashPassword = crypto.createHash('md5').update(password).digest('hex');

  const user = await User.findOne(
    { where: { email, password: hashPassword } },
  );

  if (!user) throw Error('WRONG_CREDENTIALS');

  const token = generateToken(user.email, user.id, user.role);

  return {
    name: user.name,
    email: user.email,
    role: user.role,
    token,
  };
};

const getAllSellers = async () => {
const sellers = User.findAll({
  where: { role: 'seller' },
});

return sellers;
};

module.exports = {
  createCustomer,
  loginUser,
  getAllSellers,
};