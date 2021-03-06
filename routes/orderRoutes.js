const db = require("../models");
const orderController = require("../controllers/orderController");

module.exports = app => {
    app.get("/orders", async(req,res)=>{
        try {
            let r = await db.Order.find({});
            res.json(r);
        } catch(err) {
            console.log(err);
        }
    });

    app.post("/orders", async(req,res)=>{
        try {
            let r = await db.Order.create(req.body);
            res.json(r)
            res.status(201);
        } catch(err) {
            console.log(err);
        }
    });

    app.get("/orders/:id", async(req,res)=>{
        try {
            let r = await db.Order.findById(req.params.id);
            res.json(r);
        } catch(err) {
            console.log(err);
        }
    });

    //add items to order
    app.put("/orders/:id", async(req,res)=>{
        try {
            let r = await db.Order.findByIdAndUpdate(req.params.id, {
                $push: {
                    items: req.body
                }
            });
            res.json(r);
        } catch(err) {
            console.log(err);
        }
    });

    app.delete("/orders/:id", async(req,res)=>{
        orderController.delete(req,res);
    });

    app.get("/orders/:id/orderitems", async(req,res)=>{
        orderController.getOrderItems(req,res);
    });



}