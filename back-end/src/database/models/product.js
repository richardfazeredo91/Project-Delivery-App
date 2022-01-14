const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'products',
  });

  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct,
      {foreignKey: 'productId', as: 'quantity'});
  }

  return Product;
};

module.exports = Product;