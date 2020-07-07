const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Farmer.products",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

module.exports = mongoose.model("Customer", customerSchema);
