const crypto = require('crypto');
const { User } = require('../../database/models');

const getAllUsers = async (role) => {
  if (role !== 'administrator') throw Error('ACCESS_DENIED');

  const users = await User.findAll();
  return users;
};

const signUpNewUser = async (role, newUser) => {
  if (role !== 'administrator') throw Error('ACCESS_DENIED');

  const hashPassword = crypto.createHash('md5').update(newUser.password).digest('hex');
  const userWithEncriptedPassword = { ...newUser, password: hashPassword };

  await User.create(userWithEncriptedPassword);
  const { password, ...newUserWithoutPwd } = newUser;
  return newUserWithoutPwd;
};

const deleteUser = async (role, id) => {
  if (role !== 'administrator') throw Error('ACCESS_DENIED');

  const user = await User.findByPk(id);
  if (!user) throw Error('USER_NOT_FOUND');

  await User.destroy({ where: { id } });
  return user;
};

module.exports = {
  signUpNewUser,
  getAllUsers,
  deleteUser,
};
