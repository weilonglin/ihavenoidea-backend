require("dotenv").config();
module.exports = {
  development: {
    pool: {
      max: 3,
      min: 0,
    },
    url: process.env.POSTGRES_URI,
    dialect: "postgres",
    operatorsAliases: "0",

  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    url: process.env.POSTGRES_URI,
    dialect: "postgres",
  },
};