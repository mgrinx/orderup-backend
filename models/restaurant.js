const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  menu: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }],
  orders: [{
    type: Schema.Types.ObjectId,
    ref: "Order"
  }]
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;