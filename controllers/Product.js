const Model = require("../models/Product");
const {Op} = require("sequelize");
index = async (req, res) => {
    Model.findAll({
        where: {
            promote: {
                [Op.ne] : 0
            }
        },
        limit: 3,
    }).then((products) => {
        res.render("index", {products});
    }).catch((err) => console.log(err));
};
products = async (req, res) => {
    Model.findAll().then((products) => {
        res.render("products", {products})
    }).catch((err) => console.log(err));
};
product = async (req, res) => {
    Model.findByPk(req.params.id).then((product) => {
        res.render("product", {product})
    }).catch((err) => console.log(err));
};
module.exports = {index, products, product};