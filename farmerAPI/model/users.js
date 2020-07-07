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
    default: "farmer",
  },
  customerInfo: {
    cart: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "User.farmerInfo.products",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
  farmerInfo: {
    rating: { type: Number, default: 1 },
    products: [
      {
        title: {
          type: String,
          required: true,
        },
        photo: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
});
module.exports = mongoose.model("User", userSchema);
