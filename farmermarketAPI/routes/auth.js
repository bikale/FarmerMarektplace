const route = require("express").Router();

const {
  signUp,
  login,
  logout,
  forgotPassword,
  resetPassword,
} = require("../controller/auth");

route.post("/users", signUp);
route.post("/login", login);
route.get("/logout", logout);

route.post("/forgotpassword", forgotPassword);
route.put("/resetpassword/:resettoken", resetPassword);

module.exports = route;
