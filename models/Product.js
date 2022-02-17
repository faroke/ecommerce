const {DataTypes} = require('sequelize');
const db = require('../db');
const Product = db.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    description: DataTypes.TEXT,
    img: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    promote: DataTypes.TINYINT,
    date: DataTypes.DATE
}, {
    tableName: 'products'
});

Product.sync({
    alter: true
}).then(() => {
    console.log('Product initialized')
}).catch((err) => console.log('Product Error : ', err));

module.exports = Product;