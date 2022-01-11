const adminRoute = require('express').Router();
const { getAllUsers, signUpNewUser, deleteUser } = require('../controllers/adminController');
const { validateUser } = require('../middlewares/validations');
const { authenticateToken } = require('../middlewares/jwtToken');

adminRoute.get('/', authenticateToken, getAllUsers);
adminRoute.post('/register', authenticateToken, validateUser, signUpNewUser);
adminRoute.delete('/delete/:id', authenticateToken, deleteUser);

module.exports = adminRoute;
