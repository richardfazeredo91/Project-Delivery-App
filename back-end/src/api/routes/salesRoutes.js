const saleRoute = require('express').Router();
const { authenticateToken } = require('../middlewares/jwtToken');

const { getSales, createSale } = require('../controllers/saleController');
const { validateNewSale } = require('../middlewares/validations');

saleRoute.post('/', authenticateToken, validateNewSale, createSale);
saleRoute.get('/customer', authenticateToken, getSales);

module.exports = saleRoute;
