const User = require("../model/users.js");
const fs = require("fs");
const readline = require("readline");
const path = require("path");
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

// @desc    Update User active status
// @route   Patch /api/v1/farmermarket/super/users/:userid
// @access  Private

exports.changeStatus = async (req, res, next) => {
  try {
    const users = await User.updateOne(
      { _id: req.params.userid },
      { $set: { active: req.body.status } }
    );
    res.status(200).json({
      success: true,
      message: "User status changed successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.requestLog = async (req, res, next) => {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(path.join(__dirname, "../access.log")),
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      console.log(`Line from file: ${line}`);
    });
    rl.on("end", function () {
      res.status(200).json({
        success: true,
        message: "okay",
      });
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
