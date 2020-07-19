const route = require("express").Router();

const { protect } = require("../middleware/auth.js");

const {
  getUsers,
  changeStatus,
  requestLog,
} = require("../controller/super-user");

route.get("/users", protect, getUsers);
route.patch("/users/:userid", protect, changeStatus);

route.get("/logs", protect, requestLog);

module.exports = route;
