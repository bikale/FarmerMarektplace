const User = require("../model/users.js");
const Product = require("../model/products");

// @desc    Create Product
// @route   Post /products
// @access  Private
exports.addProduct = async (req, res) => {
  try {
    let product = await Product.create(req.body);

    await User.updateOne(
      { _id: "5f03f8e2c3b2d99ffec3a81c" },
      { $push: { "farmerInfo.products": product._id } }
    );
    res.status(200).json({ success: true, data: "created" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
