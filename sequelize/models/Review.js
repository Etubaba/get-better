module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("review", {
    content: { type: DataTypes.STRING, allowNull: false },

    rating: {
      type: DataTypes.INTEGER,
    },
  });

  return Review;
};
