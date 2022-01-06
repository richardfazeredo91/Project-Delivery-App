const Sequelize = require('sequelize');
const config = require('../../database/config/config');

const saleService = require('../services/saleService')

const sequelize = new Sequelize(config.development);

const createSale = async(req, res, next) => {
  const t = await sequelize.transaction();
  try{
    const { body, user } = req;

    const sale = await saleService.createSale(body, user, t);

    await t.commit();
    
    res.status(201).json(sale);
  }catch(error){
    await t.rollback();
    console.log(error);
    next(error);
  }
};

module.exports = {
  createSale,
}