const User = require("../model/users.js");

// @desc    GET Users
// @route   Post /api/v1/farmermarket/super/users
// @access  Private

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
