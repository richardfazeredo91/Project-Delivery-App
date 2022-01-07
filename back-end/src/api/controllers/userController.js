const userService = require('../services/userService');

const createCustomer = async (req, res, next) => {
  try {
    const { body } = req;

    const response = await userService.createCustomer(body);

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { body } = req;
    
    const response = await userService.loginUser(body);

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllSellers = async(_req, res, next) => {
try {

  const sellers = await userService.getAllSellers();

  res.status(200).json(sellers);  
} catch (error) {
  console.log(error);
  next(error);
}
}

module.exports = {
  createCustomer,
  loginUser,
  getAllSellers,
};