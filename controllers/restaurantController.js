const db = require("../models");

module.exports = {
    delete: async(req,res)=>{
        try {
            await db.Item.deleteMany({ restaurantId: req.params.id });
            let r = await db.Restaurant.findByIdAndDelete(req.params.id);
            res.status(204);
            res.json(r);
        } catch(err) {
            console.log(err);
        }
    },

    getMenuItems: async(req,res)=>{
        try {
            let r = await db.Restaurant.findById(req.params.id);
            let { menu: i } = await r.populate("menu").execPopulate();
            res.json(i);
        } catch(err) {
            console.log(err);
        }
    }
};