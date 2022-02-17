const Sequelize = require('sequelize');
require('dotenv').config();
console.log(process.env.TABLE);
module.exports = new Sequelize(process.env.TABLE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
});
