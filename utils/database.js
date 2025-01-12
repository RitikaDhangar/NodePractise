const Sequelize = require("sequelize");
const sequelize = new Sequelize("shoppingapp", "root", "ritika91@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
