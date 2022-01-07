const { Sale } = require('../../database/models');

const getSales = async ( { userId, role }) => {

  try {
    
    if (role === 'customer') {
    
      const sale = await Sale.findAll({ where: { userId }});
      
      if (!sale) throw Error('SALES_NOT_FOUND');

      return {
        id: sale.id,
        userId: sale.userId,
        sellerId: sale.sellerId,
        totalPrice: sale.totalPrice,
        deliveryAddress: sale.deliveryAddress,
        deliveryNumber: sale.deliveryNumber,
        saleDate: sale.createdAt,
        status: sale.status,
      }
    }

    if (role === 'administrator') {

      const sale = await Sale.findAll();

      if (!sale) throw Error('SALES_NOT_FOUND');
  
      return {
        id: sale.id,
        userId: sale.userId,
        sellerId: sale.sellerId,
        totalPrice: sale.totalPrice,
        deliveryAddress: sale.deliveryAddress,
        deliveryNumber: sale.deliveryNumber,
        saleDate: sale.createdAt,
        status: sale.status,
      }
    }

  } catch (error) {
    
    return error;
  }
  
}

module.exports = {
  getSales
};