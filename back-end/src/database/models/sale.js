const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'sales',
    updatedAt: false,
    createdAt: false,
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.hasMany(models.User,
      {foreignKey: 'id', as: 'userId'});
    Sale.hasMany(models.User,
      {foreignKey: 'id', as: 'sellerId'}); 
  }

  return Sale;
};

module.exports = Sale;