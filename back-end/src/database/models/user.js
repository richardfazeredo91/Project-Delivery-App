const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timeStamps: false,
    underscored: true,
  });

  User.associate = (models) => {
    User.belongsTo(models.Sale,
      { foreignKey: 'id', as: 'user_id' });
      User.belongsTo(models.Sale,
        { foreignKey: 'id', as: 'seller_id' });
  }

  return User;
};

module.exports = User;