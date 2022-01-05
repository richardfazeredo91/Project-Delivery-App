const { createCustomer } = require('../controllers/userController');

const userRoute = require('express').Router();


userRoute.post('/login',);
userRoute.post('/register', createCustomer)


module.exports = userRoute;