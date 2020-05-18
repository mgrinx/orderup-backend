const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  menu: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }],
  chefs: [{
    type: Schema.Types.ObjectId,
    ref: "Chef"
  }]
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;