const adminRoute = require('express').Router();
const adminController = require('../controllers/adminController');
const { validateUser } = require('../middlewares/validations');
const { authenticateToken } = require('../middlewares/jwtToken');

adminRoute.get('/manage', authenticateToken, adminController.getAllUsers);
adminRoute.post('/manage', authenticateToken, validateUser, adminController.signUpNewUser);
adminRoute.delete('/manage/:id', authenticateToken, adminController.deleteUser);

module.exports = adminRoute;
