const route = require("express").Router();

const {
  addToCart,
  getUserCart,
  placeOrder,
  orderHistory,
} = require("../controller/customers");

route.post("/carts", addToCart);
route.get("/carts", getUserCart);

route.post("/orders", placeOrder);
route.get("/orders", orderHistory);

module.exports = route;
