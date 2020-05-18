const router = require("express").Router();
const restaurantsController = require("../../controllers/restaurantsController");

// Matches with "/api/books"
router.route("/")
  .get(restaurantsController.findAll)
  .post(restaurantsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
