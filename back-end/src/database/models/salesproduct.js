const SalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("SalesProduct", {
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: true,
    underscored: true,
  });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'id',
      otherKey: 'id',
    });
  }

  return SalesProduct;
};

module.exports = SalesProduct;