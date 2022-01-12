const adminService = require('../services/adminService');

const getAllUsers = async (req, res, next) => {
  try {
    const isAdmin = req.user.role;

    const users = await adminService.getAllUsers(isAdmin);

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const signUpNewUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const isAdmin = req.user.role;

    const user = await adminService.signUpNewUser(isAdmin, userData);

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const isAdmin = req.user.role;
    const { id } = req.params;

    const user = await adminService.deleteUser(isAdmin, id);

    return res.status(201).json(user);
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