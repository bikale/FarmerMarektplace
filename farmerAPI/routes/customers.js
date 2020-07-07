const route = require("express").Router();

const { addToCart, getUserCart } = require("../controller/customers");

route.post("/carts", addToCart);
route.get("/carts", getUserCart);

module.exports = route;
