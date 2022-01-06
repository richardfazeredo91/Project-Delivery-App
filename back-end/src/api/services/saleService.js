const { Sale, User, SalesProduct, product } = require('../../database/models');

const createSale = async({products, sellerName , totalPrice, deliveryAddress, deliveryNumber}, {email}, t) => {
 const customer = await User.findOne({
   where:{email},
  });
 const seller = await User.findOne({
   where: {name: sellerName},
 });

 if(!customer || !seller) throw Error ('USER_NOT_FOUND');

 const sale = await Sale.create(
   {
     sellerId: seller.id,
     userId: customer.id,
     totalPrice,
     deliveryAddress,
     deliveryNumber,
     status: 'pendente',
   },
   {transaction: t},
 );

 const salesProductsArray = products.map((product) => ({
   saleId: sale.id,
   productId: product.productId,
   quantity: product.quantity,
  }));

  console.log(salesProductsArray, "AQUI!!!!!!!!!");

  await SalesProduct.bulkCreate(salesProductsArray,{transaction: t});

  return sale;
};

module.exports = {
  createSale,
};