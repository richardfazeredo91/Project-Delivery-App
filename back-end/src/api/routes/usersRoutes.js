const userRoute = require('express').Router();

const { createCustomer, loginUser } = require('../controllers/userController');
const { validateUser, validateLogin } = require('../middlewares/validations');

userRoute.post('/login', validateLogin, loginUser);
userRoute.post('/register', validateUser, createCustomer);

module.exports = userRoute;