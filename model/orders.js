const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  farmer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  products: { items: [], quantity: Number, totalprice: Number },
  payment: Object,
  shipping: Object,
  orderedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "ready", "complete"],
  },
});

module.exports = mongoose.model("Order", orderSchema);
