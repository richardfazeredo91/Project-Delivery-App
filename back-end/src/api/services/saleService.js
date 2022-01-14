const { Sale, SalesProduct, Product, User } = require('../../database/models');

const createProductSales = async (products, saleId, t) => {
  const salesProductsArray = products.map(({ productId, quantity }) => ({
    saleId,
    productId,
    quantity,
   }));
 
   await SalesProduct.bulkCreate(salesProductsArray, { transaction: t });
};

const createSale = async ({ products, sellerId, totalPrice, deliveryAddress, deliveryNumber },
  { userId }, t) => {
 const sale = await Sale.create(
   {
     sellerId,
     userId,
     totalPrice,
     deliveryAddress,
     deliveryNumber,
     status: 'Pendente',
   },
   { transaction: t },
 );

  await createProductSales(products, sale.id, t);

  return sale;
};

const getSalesByUser = async ({ userId, role }) => {
  let sales;
  if (role === 'customer') {
    sales = await Sale.findAll({ where: { userId } });
  }

  if (role === 'seller') {
    sales = await Sale.findAll({ where: { sellerId: userId } });
  }
  
  return sales;
};

const formatSale = (sale, sellerName) => ({
    ...sale,
    sellerName,
    products: sale.products.map((item) => ({
      ...item,
      quantity: item.quantity[0].quantity, 
    })),
  });

const getSaleDetails = async ({ userId }, saleId) => {
 const sale = await Sale.findOne({
  where: { id: saleId },
  include: [{
    model: Product,
    as: 'products',
    through: { attributes: [] },
    include: {
      model: SalesProduct,
      as: 'quantity',
      attributes: { exclude: ['saleId', 'productId'] },
      where: { saleId },
     },
  }],
  });

  if (!sale) throw Error('SALES_NOT_FOUND');
  
  if (sale.userId !== userId && sale.sellerId !== userId) throw Error('ACCESS_DENIED');

  const sellername = await User.findOne({ where: { id: sale.sellerId } });
   
 return formatSale(sale.get({ plain: true }), sellername.name);
};

const updateStatus = async ({ status }, { userId }, saleId) => {
  const sale = await Sale.findOne({ where: { id: saleId } });

  if (!sale) throw Error('SALE_NOT_FOUND');

  if (sale.userId !== userId && sale.sellerId !== userId) throw Error('ACCESS_DENIED');

  await Sale.update(
    { status },
    { where: { id: saleId } },
  );

  return { ...sale.dataValues, status };
};

module.exports = {
  createSale,
  getSalesByUser,
  getSaleDetails,
  updateStatus,
};