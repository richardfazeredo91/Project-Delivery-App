const saleService = require('../services/saleService');

const getSales = async (req, res, next) => {
  try {
    const { userId, role } = req.user;
    
    const response = await saleService.getSales({ userId, role });

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getSales,
};