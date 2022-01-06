const productRoute = require('express').Router();
const { getAll } = require('../controllers/productController');
const { authenticateToken } = require('../middlewares/jwtToken');

productRoute.get('/listall', authenticateToken, getAll)

module.exports = productRoute;
