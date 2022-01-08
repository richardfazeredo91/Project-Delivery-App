const saleRoute = require('express').Router();
const { authenticateToken } = require('../middlewares/jwtToken');

const { getSales, createSale, getSaleDetails } = require('../controllers/saleController');
const { validateNewSale } = require('../middlewares/validations');

saleRoute.post('/', authenticateToken, validateNewSale, createSale);
saleRoute.get('/customer', authenticateToken, getSales);
saleRoute.get('/details/:saleId', authenticateToken, getSaleDetails);

module.exports = saleRoute;
