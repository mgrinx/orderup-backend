const mongoose = require("mongoose");

module.exports = mongoose.model("Item", new mongoose.Schema({
    name: { type: String, required: true },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    timeToCook: { type: Number, required: true }
}));