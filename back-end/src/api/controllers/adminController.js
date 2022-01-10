const adminService = require('../services/adminService');

const signUpNewUser = async (req, res, next) => {
  const userData = req.body;
  const isAdmin = req.user.role;

  try {
    const result = await adminService.signUpNewUser(isAdmin, userData);

    result.message
      ? res.status(result.code).json({ message: result.message })
      : res.status(result.code).json(result.newUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const result = await adminService.getAllUsers();

    result.message
      ? res.status(result.code).json({  message: result.message })
      : res.status(result.code).json(result.users);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await adminService.deleteUser(id);
    
    result.message 
      ? res.status(result.code).json({ message: result.message })
      : res.status(result.code).json();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  signUpNewUser,
  getAllUsers,
  deleteUser,
};