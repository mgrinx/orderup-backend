const mongoose = require("mongoose");
const db = require("../models");

// mongoose.connect(process.env.MONGODB_URI ||
//     "mongodb://localhost/orderup", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

module.exports = async()=>{
    try {
        let empty = (await db.Restaurant.find({})).length < 0;
        if(empty) return;

        for (let model of [db.Restaurant, db.Item, db.Order, db.OrderItem]) {
            await model.deleteMany({});
        }

        const restaurantName = "Restaurant";
        let rRest = await db.Restaurant.create({ name: restaurantName });
        const menuSeed = [
            {
                name: "Spicy Black Bean Burger",
                restaurantId: rRest._id,
                category: "Entrées",
                price: 7.95,
                timeToCook: 10
            },
            {
                name: "Piña Colada Smoothie",
                restaurantId: rRest._id,
                category: "Beverages",
                price: 5.45,
                timeToCook: 3
            }
        ];
        let rItem = await db.Item.create(menuSeed);

        await db.Restaurant.findByIdAndUpdate(rRest._id,
            {
                $push: {
                    menu: (r=>{
                        let ids = [];
                        for(let el of r) ids.push(el._id);
                        return ids;
                    })(rItem)
                }
            },
            {
                useFindAndModify: false
            }
        );
        // process.exit(0);
    } catch(err) {
        console.log(err);
        // process.exit(1);
    }
}