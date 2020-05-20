const db = require("../models");

module.exports = {
    delete: async(req,res)=>{
        try {
            await db.OrderItem.deleteMany({ orderId: req.params.id });
            let r = await db.Order.findByIdAndDelete(req.params.id);
            res.status(204);
            res.json(r);
        } catch(err) {
            console.log(err);
        }
    },

    getOrderItems: async(req,res)=>{
        try {
            let r = await db.Order.findById(req.params.id);
            let { items: i } = await r.populate("items").execPopulate();
            res.json(i);
        } catch(err) {
            console.log(err);
        }
    },
};