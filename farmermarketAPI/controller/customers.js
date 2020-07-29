const User = require("../model/users.js");
const Order = require("../model/orders");
const Products = require("../model/products.js");
const { sendmail } = require("../utils/sendMail");

// @desc      Get Farmers
// @route     Get /api/v1/farmermarket/customers/farmers
// @access    Private

exports.getFarmers = async (req, res, next) => {
  try {
    let farmers = await User.find(
      { role: "farmer" },
      { firstname: 1, lastname: 1, farmerInfo: 1 } // projecting  the necessary fields
    );

    res.status(200).json({ success: true, data: farmers });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
// @desc      Get Farmer Product
// @route     Post /api/v1/farmermarket/customers/farmers:id
// @access    Public

exports.getFarmerProduct = async (req, res, next) => {
  try {
    let products = await Products.find({ farmer: req.params.id });

    res.status(200).json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
// @desc      Add item to the cart
// @route     Post /api/v1/farmermarket/customers/cart
// @access    Public

exports.addToCart = async (req, res, next) => {
  try {
    await User.updateOne(
      { _id: "5f0417ceaec98ec6367e5f2c" },
      {
        $push: {
          "customerInfo.cart": {
            productId: "5f040a6b296ab5b247755855",
          },
        },
      }
    );
    res.status(200).json({ success: true, data: "created" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc      Get  cart list
// @route     GET /api/v1/farmermarket/customers/carts
// @access    Public

exports.getUserCart = async (req, res, next) => {
  try {
    let user = await User.findById("5f0417ceaec98ec6367e5f2c");

    let cartList = await user
      .populate("customerInfo.cart.productId")
      .execPopulate();

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc      Place order for user
// @route     Post /api/v1/farmermarket/customers/orders
// @access    Private

exports.placeOrder = async (req, res, next) => {
  const { farmerid, carts, totalQuantity, totalPrice } = req.body;
  try {
    const order = await Order.create({
      customer: req.user._id,
      farmer: farmerid,
      products: {
        items: carts,
        quantity: totalQuantity,
        totalprice: totalPrice,
      },
    });

    const { email } = await User.findOne({ _id: farmerid }); // get the farmer remail

    await sendmail(req.user.email, email, order._id);

    res.status(200).json({ success: true, data: "order succesfully placed" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc      Get order history
// @route     Get /api/v1/farmermarket/customers/orders
// @access    Private

exports.orderHistory = async (req, res, next) => {
  try {
    const orders = await Order.find({ customer: req.user._id });
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc      Rate farmer and give feedback
// @route     Patch /api/v1/farmermarket/customers/feedbacks
// @access    Private

exports.giveFeedback = async (req, res, next) => {
  try {
    const { farmerid } = req.params;
    const { comment, rate } = req.body;

    await User.updateOne(
      { _id: farmerid },
      {
        $inc: { "farmerInfo.rating": rate },
        $push: { "farmerInfo.comments": comment },
      }
    );

    res
      .status(200)
      .json({ success: true, data: "Feedback succesfully submitted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
