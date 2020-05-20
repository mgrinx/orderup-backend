const db = require("../models");
const restaurantController = require("../controllers/restaurantController");

module.exports = app => {

    app.get("/restaurants", async(req,res)=>{
        try {
            let r = await db.Restaurant.find({});
            res.json(r);
        } catch(err) {
            console.log(err);
        }
    });

    app.post("/restaurants", async(req,res)=>{
        try {
            let r = await db.Restaurant.create(req.body);
            res.status(201);
            res.json(r);
        } catch(err) {
            console.log(err);
        }
    });

    app.get("/restaurants/:id", async(req,res)=>{
        try {
            let r = await db.Restaurant.findById(req.params.id);
            res.json(r);
        } catch(err) {
            console.log(err);
        }
    });

    app.delete("/restaurants/:id", async(req,res)=>{
        restaurantController.delete(req,res);
    });

    app.put("/restaurants/:id", async(req,res)=>{
        try {
            let r = await db.Restaurant.findByIdAndUpdate(req.params.id, req.body);
            res.status(204);
            res.json(r);
        } catch(err) {
            console.log(err);
        }
    });

    app.get("/restaurants/:id/menu", async(req,res)=>{
        restaurantController.getMenuItems(req,res);
    });

    // app.post("/restaurants/:id/menu", async(req,res)=>{

    // });
}