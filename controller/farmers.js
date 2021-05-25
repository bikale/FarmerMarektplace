const User = require("../model/users.js");
const Product = require("../model/products");
const Order = require("../model/orders");
const { Storage } = require("@google-cloud/storage");
const path = require("path");
const { sendmail } = require("../utils/sendMail");
const fs = require("fs");
// @desc    Create Product
// @route   Post /api/v1/farmermarket/farmers/products
// @access  Private

exports.addProduct = async (req, res, next) => {
  try {
    // const keyLocation = path.join(__dirname, "../config/gcpkey.json");
    // const storage = new Storage({
    //   projectId: "farmermarket-283318",
    //   keyFilename: keyLocation,
    // });

    // const bucket = storage.bucket("farmermarket");
    // const gcsname = Date.now() + req.file.originalname;
    // const file = bucket.file(gcsname);

    // const stream = file.createWriteStream({
    //   metadata: {
    //     contentType: req.file.mimetype,
    //   },
    //   resumable: false,
    //   gzip: true,
    //   public: true,
    // });

    // stream.end(req.file.buffer); // send the file and close the stream

    // const photoUrl = `https://storage.googleapis.com/farmermarket/${gcsname}`;
    // stream.on("finish", async () => {
    //   let product = await Product.create({
    //     farmer: req.user._id,
    //     ...req.body,
    //     photo: photoUrl,
    //   }); // store the product in the product collection
    //   res.status(200).json({
    //     success: true,
    //     message: "Successfully product created",
    //     data: product,
    //   });
    // });
    // stream.on("error", (err) => {
    //   res.status(400).json({ success: false, message: err });
    // });
    const img = fs.readFileSync(req.file.path);
    const encode_img = img.toString("base64");

    let product = await Product.create({
      farmer: req.user._id,
      ...req.body,
      photo: encode_img,
    }); // store the product in the product collection
    res.status(200).json({
      success: true,
      message: "Successfully product created",
      data: product,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
// @desc    Get all Products of the farmer
// @route   Get /api/v1/farmermarket/farmers/products
// @access  Private

exports.getProducts = async (req, res) => {
  try {
    let products = await Product.find({ farmer: req.user._id });
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// @desc      Get customers orders
// @route     Get /api/v1/farmermarket/farmers/orders
// @access    Private

exports.checkOrders = async (req, res) => {
  try {
    const orders = await Order.find({ farmer: req.user._id });
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
// @desc      Post update order status pending =>r eady => complete
// @route     Patch /api/v1/farmermarket/farmers/orders/:order_number
// @access    Private

exports.updateOrder = async (req, res) => {
  try {
    const { order_number } = req.params;
    const { status } = req.body;
    await Order.updateOne({ _id: order_number }, { $set: { status: status } });

    if (status == "complete") {
      sendmail(req.user.email, null, order_number, "farmer adresses");
    }

    res.status(200).json({ success: true, data: "orders succefully updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
