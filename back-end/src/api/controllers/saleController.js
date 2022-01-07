const saleService = require('../services/saleService');

const getSales = async (req, res, next) => {
  try {
    const { user_id, role } = req.user;
    
    const response = await saleService.getSales({ user_id, role });

    res.status(200).json(response);

  } catch (error) {

    next(error);
  }
};

module.exports = {
  getSales,
};