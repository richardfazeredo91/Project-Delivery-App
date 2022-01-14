const productRoute = require('express').Router();
const { getAll } = require('../controllers/productController');

productRoute.get('/listall', getAll);

module.exports = productRoute;
