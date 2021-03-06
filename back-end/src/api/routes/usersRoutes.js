const userRoute = require('express').Router();

const { createCustomer, loginUser, getAllSellers } = require('../controllers/userController');
const { validateUser, validateLogin } = require('../middlewares/validations');

userRoute.post('/register', validateUser, createCustomer);
userRoute.post('/login', validateLogin, loginUser);
userRoute.get('/sellers', getAllSellers);

module.exports = userRoute;