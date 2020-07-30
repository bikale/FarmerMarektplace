const route = require("express").Router();

const { protect, authorize } = require("../middleware/auth.js");

const {
  getUsers,
  changeStatus,
  requestLog,
  transactions,
} = require("../controller/super-user");

route.get("/users", protect, authorize("super"), getUsers);
route.patch("/users/:userid", protect, authorize("super"), changeStatus);

route.get("/logs", protect, authorize("super"), requestLog);
route.get("/transactions", protect, authorize("super"), transactions);
module.exports = route;
