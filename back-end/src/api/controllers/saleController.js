const Sequelize = require('sequelize');
const saleService = require('../services/saleService');
const config = require('../../database/config/config');

const sequelize = new Sequelize(config.development);

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

const getSalesByUser = async (req, res, next) => {
  try {
    const { userId, role } = req.user;
    
    const response = await saleService.getSalesByUser({ userId, role });

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getSaleDetails = async (req, res, next) => {
  try {
    const { user } = req;
    const { saleId } = req.params;

    const sale = await saleService.getSaleDetails(user, saleId);

    res.status(200).json(sale);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const { body, user } = req;
    const { saleId } = req.params;

    const sale = await saleService.updateStatus(body, user, saleId);

    res.status(201).json(sale);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createSale,
  getSalesByUser,
  getSaleDetails,
  updateStatus,
};