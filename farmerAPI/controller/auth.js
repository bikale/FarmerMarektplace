const User = require("../model/users.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc    Create User
// @route   Post /farmermarket/auth/users
// @access  Public

exports.signUp = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide an email and password",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "user already exist",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({ ...req.body, password: hashpassword });

    sendTokenResponse(newUser, res); // call function to generate token and respond
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

// @desc    User login
// @route   Post /farmermarket/auth/login
// @access  Public

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide an email and password",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    //Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    sendTokenResponse(user, res); // call function to generate token and respond
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

// generate token, create cookie and send response
const sendTokenResponse = (user, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // 30 days
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.status(201).cookie("token", token, options).json({
    success: true,
    message: "User succesfully created",
    token,
  });
};
