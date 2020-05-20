const mongoose = require("mongoose");

module.exports = mongoose.model("Order", new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: String, required: true, default: Date.now() },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, required: true },
    phone: { type: String, required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrderItem" }]
}));