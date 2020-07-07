const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const farmerSchema = new Schema({
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
});

module.exports = mongoose.model("Farmer", farmerSchema);
