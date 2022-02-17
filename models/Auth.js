const {DataTypes} = require('sequelize');
const db = require('../db');
const Product = db.define('Auth', {
    email : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    town: DataTypes.STRING,
    tel: DataTypes.STRING,
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'members'
});

Product.sync({
    alter: true
}).then(() => {
    console.log('Members initialized')
}).catch((err) => console.log('Product Error : ', err));

module.exports = Product;