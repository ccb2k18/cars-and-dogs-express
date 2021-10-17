const express = require("express");
const app = express();
app.set("view engine", "ejs");

const dogImageNames = require("./data/dogImageNames");
const carImageNames = require("./data/carImageNames");

app.use(express.static(__dirname + "/public"));

app.get("/dogs", (req, res) => {
    res.render("dogs", { dogImageNames });
});

app.get("/cars", (req, res) => {
    res.render("cars", { carImageNames });
});

app.get("/cars/new", (req, res, next) => {
    res.sendFile(`${__dirname}/public/html/newcar.html`);
});

/**
@param {express.Request} req
@param {express.Response} res
@param {express.NextFunction} next
*/
function notFoundMiddleware(req, res, next) {
    res.sendFile(`${__dirname}/public/html/404notfound.html`);
}

app.get("/*", notFoundMiddleware);

app.listen(7077);