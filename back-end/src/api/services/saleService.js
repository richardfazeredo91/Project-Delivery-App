const { Sale, User, SalesProduct } = require('../../database/models');

const createProductSales = async (products, saleId, t) => {
  const salesProductsArray = products.map(({ productId, quantity }) => ({
    saleId,
    productId,
    quantity,
   }));
 
   await SalesProduct.bulkCreate(salesProductsArray, { transaction: t });
};

const createSale = async ({ products, sellerName, totalPrice, deliveryAddress, deliveryNumber },
  { email }, t) => {
 const customer = await User.findOne({ where: { email } });
 const seller = await User.findOne({ where: { name: sellerName } });

 if (!customer || !seller) throw Error('USER_NOT_FOUND');

 const sale = await Sale.create(
   {
     sellerId: seller.id,
     userId: customer.id,
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
};