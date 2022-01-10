const { User } = require('../../database/models');
const crypto = require('crypto');

const signUpNewUser = async (role, newUser) => {
  if (role !== 'admin') {
    return {
      code: '401',
      message: 'Somente admins podem cadastrar novos usuários',
    }
  };

  const hashPassword = crypto.createHash('md5').update(newUser.password).digest('hex');
  newUser = { ...newUser, password: hashPassword };

  await User.create(newUser);
  const { password, ...newUserWithoutPwd } = newUser;
  return { code: '201', newUser: newUserWithoutPwd };
};

const getAllUsers = async (role) => {
  if (role !== 'admin') {
    return {
      code: '401',
      message: 'Somente admins podem consultar a lista de usuários',
    }
  };

  const users = await User.findAll();
  return { code: '200', users };
};

const deleteUser = async (id, role) => {
  if (role !== 'admin') {
    return {
      code: '401',
      message: 'Somente admins podem deletar usuários',
    }
  };

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
