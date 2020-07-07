const User = require("../model/users.js");

// @desc    Create User
// @route   Post /users
// @access  Public
exports.signUp = async (req, res) => {
  await User.create(req.body);

  res.status(200).json({ success: true, data: "created" });
};
