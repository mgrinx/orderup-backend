const mongoose = require("mongoose");

module.exports = mongoose.model("Restaurant", new mongoose.Schema({
    name: { type: String, required: true },
    menu: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }]
}));