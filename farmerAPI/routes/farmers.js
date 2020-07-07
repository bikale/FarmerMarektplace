const route = require("express").Router();

const { addProduct } = require("../controller/farmers");

route.post("/products", addProduct);

module.exports = route;
