const router = require("express").Router();
const restaurantsController = require("../../controllers/restaurantsController");
const ordersController = require("../../controllers/ordersController");

// All restaurants
router.route("/")
  .get(restaurantsController.findAll)
  .post(restaurantsController.create);

// One restaurant
router.route("/:id")
  .get(restaurantsController.findById)
  .put(restaurantsController.update)
  .delete(restaurantsController.remove);

// Menu for 1 restaurant
router.route("/:id/menu")
  .get(restaurantsController.getMenuItems);

// All orders for 1 restaurant
router.route("/:restaurantId/orders")
  .get(ordersController.findByRestaurant)
  .post(ordersController.create);

module.exports = router;
