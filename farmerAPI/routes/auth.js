const route = require("express").Router();

const { signUp } = require("../controller/auth");

route.post("/users", signUp);

module.exports = route;
