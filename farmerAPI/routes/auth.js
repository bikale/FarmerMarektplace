const route = require("express").Router();

const { signUp, login } = require("../controller/auth");

route.post("/users", signUp);
route.post("/login", login);

module.exports = route;
