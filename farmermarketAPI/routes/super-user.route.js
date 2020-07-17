const route = require("express").Router();

const { protect } = require("../middleware/auth.js");
const { getUsers } = require("../controller/super-user");

route.get("/users", protect, getUsers);

module.exports = route;
