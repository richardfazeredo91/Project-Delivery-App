const crypto = require('crypto');
const { User } = require('../../database/models');

const signUpNewUser = async (role, newUser) => {
  if (role !== 'administrator') {
    return {
      code: '401',
      message: 'Somente admins podem cadastrar novos usuários',
    };
  }

  const hashPassword = crypto.createHash('md5').update(newUser.password).digest('hex');
  const userWithEncriptedPassword = { ...newUser, password: hashPassword };

  await User.create(userWithEncriptedPassword);
  const { password, ...newUserWithoutPwd } = newUser;
  return { code: '201', newUser: newUserWithoutPwd };
};

const getAllUsers = async (role) => {
  if (role !== 'administrator') {
    return {
      code: '401',
      message: 'Somente admins podem consultar a lista de usuários',
    };
  }

  const users = await User.findAll();
  return { code: '200', users };
};

const deleteUser = async (role, id) => {
  if (role !== 'administrator') {
    return {
      code: '401',
      message: 'Somente admins podem deletar usuários',
    };
  }

  const user = await User.findByPk(id);
  if (!user) return { code: '404', message: 'usuário não encontrado!' };

  await User.destroy({ where: { id } });
  return { code: '200' };
};

module.exports = {
  signUpNewUser,
  getAllUsers,
  deleteUser,
};
