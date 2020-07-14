const route = require("express").Router();
const { protect } = require("../middleware/auth.js");
const {
  signUp,
  login,
  logout,
  forgotPassword,
  resetPassword,
  checkEmailExist,
  getMe,
} = require("../controller/auth");
const { Router } = require("express");

route.post("/users", signUp);
route.post("/login", login);
route.get("/logout", logout);
route.get("/users/:email", checkEmailExist);

route.get("/me", protect, getMe);

route.post("/forgotpassword", forgotPassword);
route.put("/resetpassword/:resettoken", resetPassword);

module.exports = route;
