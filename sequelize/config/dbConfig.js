module.exports = {
  host: "localhost",
  user: "postgres",
  port: 8000,
  password: "etubaba",
  database: "shop",
  dialet: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 4 * 30000,
    idle: 10000,
  },
};
