const route = require("express").Router();
const { protect, authorize } = require("../middleware/auth");

const {
  addToCart,
  getUserCart,
  placeOrder,
  orderHistory,
  getFarmers,
  getFarmerProduct,
  giveFeedback,
} = require("../controller/customers");

route.get("/farmers", protect, authorize("customer"), getFarmers);
route.get("/farmers/:id", protect, authorize("customer"), getFarmerProduct);

route.post("/carts", protect, authorize("customer"), addToCart);
route.get("/carts", protect, authorize("customer"), getUserCart);

route.post("/orders", protect, authorize("customer"), placeOrder);
route.get("/orders", protect, authorize("customer"), orderHistory);

route.patch(
  "/feedbacks/:farmerid",
  protect,
  authorize("customer"),
  giveFeedback
);

module.exports = route;
