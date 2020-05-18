const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  timeToCook: { type: Number, required: true },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },
  parentItemId: {
    type: Schema.Types.ObjectId,
    ref: "Item"
  },
  addons: [{
      type: Schema.Types.ObjectId,
      ref: "Item"
  }]
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
