const db = require("../models");
const orderItemController = require("../controllers/orderItemController");

module.exports = app => {

    app.get("/orders", async(req,res)=>{
        try {
            let r = await db.OrderItem.find({});
            res.json(r);
        } catch(err) {
            console.log(err);
        }
    });

    app.get("/orderitems/:id/item", async(req,res)=>{
        orderItemController.getItem(req,res);
    });

    app.post("/orderitems", async(req,res)=>{
        orderItemController.create(req,res);
    });
}