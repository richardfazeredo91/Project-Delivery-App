const { Sale } = require('../../database/models');

const getSales = async ( { user_id, role }) => {

  try {
    
    if (role === 'customer') {
    
      // Debuger
      console.log('IF do SERVICE');

      const sales = await Sale.findAll({ where: { user_id }});
      
      // Debuger
      console.log('Retorno do banco:');
      console.log(sales);

      if (!sales) throw Error('SALES_NOT_FOUND');

      return sales;

      // return {
      //   id: sales.id,
      //   userId: sales.user_id,
      //   sellerId: sales.seller_id,
      //   totalPrice: sales.total_price,
      //   deliveryAddress: sales.delivery_address,
      //   deliveryNumber: sales.delivery_number,
      //   saleDate: sales.sale_date,
      //   status: sales.status,
      // }
    }

    if (role === 'administrator') {

      const sales = await Sale.findAll();

      if (!sales) throw Error('SALES_NOT_FOUND');
  
        return sales
      // return {
      //   id: sales.id,
      //   userId: sales.userId,
      //   sellerId: sales.sellerId,
      //   totalPrice: sales.totalPrice,
      //   deliveryAddress: sales.deliveryAddress,
      //   deliveryNumber: sales.deliveryNumber,
      //   saleDate: sales.createdAt,
      //   status: sales.status,
      // }
    }

  } catch (error) {
          // // Debuger
          // console.log('Caiu no CAtch ERROr');
          // console.log(error);
    return error;
  }
}

module.exports = {
  getSales
};