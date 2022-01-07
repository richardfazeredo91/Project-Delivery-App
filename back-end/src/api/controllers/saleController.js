const Sequelize = require('sequelize');
const saleService = require('../services/saleService');
const config = require('../../database/config/config');

const sequelize = new Sequelize(config.development);

const getSales = async (req, res, next) => {
  try {
    const { userId, role } = req.user;
    
    const response = await saleService.getSales({ userId, role });

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

  const createSale = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const { body, user } = req;

    const sale = await saleService.createSale(body, user, t);

    await t.commit();
    
    res.status(201).json(sale);
  } catch (error) {
    await t.rollback();
    console.log(error);
    next(error);
  }
};

module.exports = {
  getSales,
  createSale,
};