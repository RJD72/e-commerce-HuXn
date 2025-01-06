const router = require("express").Router();
const {
  createCategory,
  updateCategory,
  removeCategory,
  listCategories,
  getCategory,
} = require("../controllers/categoryController");
const {
  authenticate,
  authorizeAdmin,
} = require("../middlewares/authMiddleware");

router.route("/").post(authenticate, authorizeAdmin, createCategory);
router.route("/:categoryId").put(authenticate, authorizeAdmin, updateCategory);
router
  .route("/:categoryId")
  .delete(authenticate, authorizeAdmin, removeCategory);
router.route("/categories").get(listCategories);
router.route("/:id").get(getCategory);

module.exports = router;
