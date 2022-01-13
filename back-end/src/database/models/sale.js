

const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(10,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'sales',
  });

  Sale.associate = (models) => {
    Sale.hasMany(models.User,
      {foreignKey: 'id', as: 'user_id'});
    Sale.hasMany(models.User,
      {foreignKey: 'id', as: 'seller_id'});
    Sale.hasMany(models.SalesProduct,
      {foreignKey: 'saleId', as: 'quantity'});
  }

  return Sale;
};

module.exports = Sale;