const route = require("express").Router();

const {
  signUp,
  login,
  logout,
  forgotPassword,
  resetPassword,
  checkEmailExist,
} = require("../controller/auth");

route.post("/users", signUp);
route.post("/login", login);
route.get("/logout", logout);
route.get("/users/:email", checkEmailExist);

route.post("/forgotpassword", forgotPassword);
route.put("/resetpassword/:resettoken", resetPassword);

module.exports = route;
