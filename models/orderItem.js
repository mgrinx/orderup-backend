const mongoose = require("mongoose");

module.exports = mongoose.model("OrderItem", new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, required: true },
    itemId: { type: mongoose.Schema.Types.ObjectId, required: true },
    quantity: { type: Number, default: 0 },
}));