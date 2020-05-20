const restaurantRoutes = require("./restaurantRoutes");
const orderRoutes = require("./orderRoutes");
const orderItemRoutes = require("./orderItemRoutes");

module.exports = app => {
    restaurantRoutes(app);
    orderRoutes(app);
    orderItemRoutes(app);
}