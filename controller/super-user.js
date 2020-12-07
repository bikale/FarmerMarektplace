const User = require("../model/users.js");
const Order = require("../model/orders");
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

// @desc    Get all request logs
// @route   GET /api/v1/farmermarket/super/logs
// @access  Private
exports.requestLog = async (req, res, next) => {
  try {
    const requestLogs = [];
    const rl = readline.createInterface({
      input: fs.createReadStream(path.join(__dirname, "../public/access.log")),
      crlfDelay: Infinity,
    });
    rl.on("line", (line) => {
      let log = line.split(" ");
      requestLogs.push({
        method: log[0],
        url: log[1],
        response_time: log[3],
        request_date: log.splice(4).join(" "),
      });
    });
    rl.on("close", () => {
      res.status(200).json({
        success: true,
        data: requestLogs,
      });
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc    Get all order transactions
// @route   GET /api/v1/farmermarket/super/transactions
// @access  Private
exports.transactions = async (req, res, next) => {
  try {
    const transactions = await Order.find();
    res.status(200).json({
      success: true,
      data: transactions,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
