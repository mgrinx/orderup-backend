const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, default: Date.now },
  restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true
  },
  items: [{
      type: Schema.Types.ObjectId,
      ref: "Item"
  }]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;