const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialet,
    operatorAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("database connected.");
  } catch (err) {
    console.log("unable to connect to db:", err);
  }
})();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("../models/Product")(sequelize, DataTypes);
db.reviews = require("../models/Review")(sequelize, DataTypes);

(async () => {
  try {
    await db.sequelize.sync({ force: false, alter: false });
    console.log("<<<<<  Sync done >>>>>");
  } catch (error) {
    console.error("Unable to sync db", error);
  }
})();

module.exports = db;
