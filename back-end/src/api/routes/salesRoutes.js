const saleRoute = require('express').Router();
const { authenticateToken } = require('../middlewares/jwtToken');

const { getSales } = require('../controllers/saleController');

saleRoute.get('/customer', authenticateToken, getSales);

module.exports = saleRoute;
