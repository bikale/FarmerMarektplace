const route = require("express").Router();
const { protect, authorize } = require("../middleware/auth");

const {
  addProduct,
  checkOrders,
  updateOrder,
  getProducts,
} = require("../controller/farmers");

route.post("/products", protect, addProduct);
route.get("products", protect, getProducts);

route.get("/orders", protect, checkOrders);
route.post("/orders/:order_number", protect, updateOrder);

module.exports = route;
