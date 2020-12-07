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

route.post("/users", signUp);
route.post("/login", login);
route.get("/logout", logout);
route.get("/users/:email", checkEmailExist);

route.get("/me", protect, getMe);

route.patch("/forgotpassword", forgotPassword);
route.patch("/resetpassword/:resettoken", resetPassword);

module.exports = route;
