const User = require("../model/users.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { forgetPasswordEmail } = require("../utils/sendMail");

// @desc    Create User
// @route   Post api/v1/farmermarket/auth/users
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

    sendTokenResponse(newUser, res, "User succesfully created"); // call function to generate token and respond
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

// @desc    Check email already exist
// @route   get api/v1/farmermarket/auth/users/:email
// @access  Public

exports.checkEmailExist = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.params.email });

    if (user) {
      res.status(200).json({
        success: false,
        message: "user already exist",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "user not exist",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

// @desc    User login
// @route   Post api/v1/farmermarket/auth/login
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

    sendTokenResponse(user, res, "succesfully logged in"); // call function to generate token and respond
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

// @desc      Log user out / clear cookie
// @route     GET /api/v1/farmermarket/auth/logout
// @access    Private

exports.logout = async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: {},
  });
};

// @desc      Get user profile
// @route     GET /api/v1/farmermarket/auth/me
// @access    Private

exports.getMe = async (req, res, next) => {
  try {
    const profile = await User.findOne({ _id: req.user._id });
    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong not able to send reset token",
    });
  }
};

// @desc      Forgot password
// @route     Patch /api/v1/farmermarket/auth/forgotpassword
// @access    Private

exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "There is no user with this email",
      });
    }

    const resetToken = crypto.randomBytes(20).toString("hex"); //this token will send to the user

    // Hash Token and set to resetPasswordToken field in db
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // Set expire
    const resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minute

    await User.updateOne(
      { email: email },
      { $set: { resetPasswordToken, resetPasswordExpire } }
    );

    const resetLink = `${req.protocol}://${req.get(
      "host"
    )}/resetpassword/${resetToken}`;

    forgetPasswordEmail(email, resetLink);

    // // Create reset url
    // const resetUrl = `${req.protocol}://${req.get(
    //   "host"
    // )}/api/v1/farmermarket/auth/resetpassword/${resetToken}`;

    // const message = `You are receiving this email because you (or someone else) has requested to reset  a password.
    //                  to reset password click this link \n\n ${resetUrl}`;

    res.status(200).json({ success: true, data: "Link sent in email" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong not able to send reset token",
    });
  }
};

// @desc      Reset password
// @route     PUT /api/v1/farmermarket/auth/resetpassword/:resettoken
// @access    Private
exports.resetPassword = async (req, res, next) => {
  try {
    // Get hashed version of token from the user reset url sent
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.resettoken)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }, // check the token expiration time
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid token ",
      });
    }

    // Set new password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt); // hasing the new password

    user.password = hashpassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    sendTokenResponse(user, res, "succesfully password changed"); // call function to generate token and respond
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong not able to reset the password",
    });
  }
};

// generate token, create cookie and send response
const sendTokenResponse = (user, res, message) => {
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
    message,
    token,
    role: user.role,
  });
};
