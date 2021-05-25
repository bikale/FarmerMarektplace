const route = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "public/images" });
const { protect, authorize } = require("../middleware/auth");

const {
  addProduct,
  checkOrders,
  updateOrder,
  getProducts,
} = require("../controller/farmers");

route.post(
  "/products",
  protect,
  authorize("farmer"),
  // multer().single("image"),
  upload.single("image"),
  addProduct
);
route.get("/products", protect, authorize("farmer"), getProducts);

route.get("/orders", protect, authorize("farmer"), checkOrders);
route.patch("/orders/:order_number", protect, authorize("farmer"), updateOrder);

module.exports = route;
