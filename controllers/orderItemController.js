const db = require("../models");

module.exports = {
    create: async(req,res)=>{
        try {
            let r = await db.OrderItem.create(req.body);
            await db.Order.findByIdAndUpdate(req.body.orderId, {
                $push: {
                    items: r._id
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
            let i = await db.Item.findById(r.data.itemId);
            res.json(i);
        } catch(err) {
            console.log(err);
        }
    }
};