const User = require("../model/users.js");

// @desc      Add item to the cart
// @route     Post /cart
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
    res.status(400).json({ success: false, message: err.message });
  }
};

// @desc      Get  cart list
// @route     GET /carts
// @access    Public

exports.getUserCart = async (req, res, next) => {
  try {
    let user = await User.findById("5f0417ceaec98ec6367e5f2c");
    let cartList = await user
      .populate("customerInfo.cart.productId")
      .execPopulate();
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
