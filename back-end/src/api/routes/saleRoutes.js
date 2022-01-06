const saleRoute = require('express').Router();

const { createSale } = require('../controllers/saleController');
const { authenticateToken } = require('../middlewares/jwtToken');
const { validateNewSale } = require('../middlewares/validations');

saleRoute.post('/', authenticateToken, validateNewSale, createSale);

module.exports = saleRoute;
