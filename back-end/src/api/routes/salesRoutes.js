const saleRoute = require('express').Router();

const { authenticateToken } = require('../middlewares/jwtToken');
const { 
  getSales,
  createSale,
  getSaleDetails,
  updateStatus, 
} = require('../controllers/saleController');
const { validateNewSale, validateStatus } = require('../middlewares/validations');

saleRoute.post('/', authenticateToken, validateNewSale, createSale);
saleRoute.get('/customer', authenticateToken, getSales);
saleRoute.get('/details/:saleId', authenticateToken, getSaleDetails);
saleRoute.put('/status/:saleId', authenticateToken, validateStatus, updateStatus);

module.exports = saleRoute;
