const app = require("express")();
const bodyParser = require("body-parser");
const db = require('./db');
const {index, product, products} = require("./controllers/Product");
const {getRegister, getLogin, postLogin} = require("./controllers/Auth");

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",  index);
app.get("/products", products);
app.get("/products/:id", product);
app.get("/register", getRegister);
app.post("/register", postRegister);
app.get("/login", getLogin);
app.post("/login", postLogin);

app.listen(PORT = 8080, () => { console.log(`Server online on http://localhost:${PORT}`); });