const Model = require('../models/Auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

getRegister = async (req, res) => {
    res.render("register");
}
postRegister = async (req, res) => {
    console.log(req.body);
    Model.create({
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
        isAdmin: false
    })
    res.render('login');
}
getLogin = async (req, res) => {
    res.render("login");
}
postLogin = async (req, res) => {
    Model.findOne({where: {email: req.body.email}}).then((account) => {
        if(bcrypt.compareSync(req.body.password, account.password)){
            const token = jwt.sign({email: req.body.email, password: account.password}, 'C EST SUPER SECRET', {});
            console.log(token);
            res.render('session', {token, firstname: account.firstname, lastname: account.lastname});
        }
        else {
            res.render('login', {error: 'Incorrect Password'});
        }
    }).catch((err) => console.log(err));
}
module.exports = {getRegister, postRegister, getLogin, postLogin};