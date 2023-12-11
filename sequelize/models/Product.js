module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    title: { type: DataTypes.STRING, allowNull: false },
    price: {
      type: DataTypes.INTEGER,
    },
    sold: {
      type: DataTypes.BOOLEAN,
    },
    instock: {
      type: DataTypes.BOOLEAN,
    },
  });

  return Product;
};
