const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
const orderRoutes = require("./orders");

router.use("/restaurants", restaurantRoutes);
router.use("/orders", orderRoutes);

module.exports = router;
