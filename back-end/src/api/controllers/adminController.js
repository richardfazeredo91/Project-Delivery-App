const adminService = require('../services/adminService');

const signUpNewUser = async (req, res, next) => {
  const userData = req.body;
  const isAdmin = req.user.role;

  try {
    const result = await adminService.signUpNewUser(isAdmin, userData);
    if (result.message) return res.status(result.code).json({ message: result.message });

    return res.status(result.code).json(result.newUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  const isAdmin = req.user.role;

  try {
    const result = await adminService.getAllUsers(isAdmin);
    if (result.message) return res.status(result.code).json({ message: result.message });

    return res.status(result.code).json(result.users);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const isAdmin = req.user.role;

  try {
    const { id } = req.params;
    const result = await adminService.deleteUser(isAdmin, id);
    if (result.message) return res.status(result.code).json({ message: result.message });

    return res.status(result.code).json();
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