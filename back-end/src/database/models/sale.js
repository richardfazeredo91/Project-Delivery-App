const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    status: DataTypes.STRING,
  },
  {
    timestamps: true,
    updatedAt: false,
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.hasMany(models.User,
      {foreignKey: 'id', as: 'user_id'});
    Sale.hasMany(models.User,
      {foreignKey: 'id', as: 'seller_id'}); 
  }

  return Sale;
};

module.exports = Sale;