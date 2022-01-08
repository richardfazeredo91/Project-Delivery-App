const { Product } = require('../../database/models');

const getAll = async (_req, res, next) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (error) {
    next(error);  
  }
};

module.exports = { getAll };
