const { createCustomer } = require('../controllers/userController');
const { validateUser } = require('../middlewares/validations');

const userRoute = require('express').Router();


userRoute.post('/login',);
userRoute.post('/register', validateUser, createCustomer)


module.exports = userRoute;