const { Sale } = require('../../database/models');

const getSales = async ( { user_id, role }) => {

  try {
    
    if (role === 'customer') {

      const sales = await Sale.findAll({ where: { user_id }});
      

      if (!sales) throw Error('SALES_NOT_FOUND');

      return sales;

    }

    if (role === 'administrator') {

      const sales = await Sale.findAll();

      if (!sales) throw Error('SALES_NOT_FOUND');
  
        return sales
    }

  } catch (error) {

    return error;
  }
}

module.exports = {
  getSales
};