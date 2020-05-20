const db = require("../models");

module.exports = {
    create: async(req,res)=>{
        try {
            let rOrdItm = await db.OrderItem.create(req.body);
            let r = await db.Order.findByIdAndUpdate(req.params.orderId, {
                $push: {
                    items: rOrdItm._id
                }
            })
            res.status(201);
            res.json(r);
        } catch(err) {
            console.log(err);
        }
    },

    getItem: async(req,res)=>{
        try {
            let r = await db.OrderItem.findById(req.params.id);
            let { itemId: i } = await r.populate("itemId").execPopulate();
            res.json(i);
        } catch(err) {
            console.log(err);
        }
    }
};