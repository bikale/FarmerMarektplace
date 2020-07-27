const route = require("express").Router();
const { protect, authorize } = require("../middleware/auth");

const {
  addToCart,
  getUserCart,
  placeOrder,
  orderHistory,
  getFarmers,
  getFarmerProduct,
} = require("../controller/customers");

route.get("/farmers", getFarmers);
route.get("/farmers/:id", getFarmerProduct);

route.post("/carts", addToCart);
route.get("/carts", getUserCart);

route.post("/orders", placeOrder);
route.get("/orders", orderHistory);

module.exports = route;
