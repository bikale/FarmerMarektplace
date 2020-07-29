const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "customer", //customer
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  customerInfo: {
    cart: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number },
      },
    ],
  },
  farmerInfo: {
    rating: { type: Number, default: 1 },
    comments: [String],
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("User", userSchema);
