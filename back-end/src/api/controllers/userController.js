const userService = require('../services/userService')


const createCustomer = async(req,res,next) => {
  try {
    const { body } = req;

    const response = await userService.createCustomer(body);

    return res.status(201).json(response)
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createCustomer,
}