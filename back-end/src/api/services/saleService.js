const { Sale, User, SalesProduct } = require('../../database/models');

const getSales = async ({ userId, role }) => {
  try {
    if (role === 'customer') {
      const sales = await Sale.findAll({ where: { userId } });
      
      console.log(sales);

      if (!sales) throw Error('SALES_NOT_FOUND');

      return sales;
    }

    // if (role === 'administrator') {
    //   const sales = await Sale.findAll();

    //   if (!sales) throw Error('SALES_NOT_FOUND');
  
    //     return sales;
    // }
  } catch (error) {
    return error;
  }
};

const createProductSales = async (products, saleId, t) => {
  const salesProductsArray = products.map(({ productId, quantity }) => ({
    saleId,
    productId,
    quantity,
   }));
 
   await SalesProduct.bulkCreate(salesProductsArray, { transaction: t });
};

const createSale = async ({ products, sellerName, totalPrice, deliveryAddress, deliveryNumber },
  { userId }, t) => {
 const seller = await User.findOne({ where: { name: sellerName } });

 if (!seller) throw Error('USER_NOT_FOUND');

 const sale = await Sale.create(
   {
     sellerId: seller.id,
     userId,
     totalPrice,
     deliveryAddress,
     deliveryNumber,
     status: 'pendente',
   },
   { transaction: t },
 );

  await createProductSales(products, sale.id, t);

  return sale;
};

module.exports = {
  createSale,
  getSales,
};