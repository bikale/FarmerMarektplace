const route = require("express").Router();

const {
  addProduct,
  checkOrders,
  updateOrder,
} = require("../controller/farmers");

route.post("/products", addProduct);

route.get("/orders", checkOrders);
route.post("/orders/:order_number", updateOrder);

module.exports = route;
