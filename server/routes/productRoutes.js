const router = require("express").Router();
const formidable = require("express-formidable");
const {
  authenticate,
  authorizeAdmin,
} = require("../middlewares/authMiddleware");
const checkId = require("../middlewares/checkId");
const {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById,
  getAllProducts,
  addProductReview,
  getTopProducts,
  getNewProducts,
  filterProducts,
} = require("../controllers/productController");

router
  .route("/")
  .get(getProducts)
  .post(authenticate, authorizeAdmin, formidable(), addProduct);

router.route("/allProducts").get(getAllProducts);

router.get("/top", getTopProducts);
router.get("/new", getNewProducts);

router.route("/:id/reviews").post(authenticate, checkId, addProductReview);
router
  .route("/:id")
  .get(getProductById)
  .put(authenticate, authorizeAdmin, formidable(), updateProduct)
  .delete(authenticate, authorizeAdmin, deleteProduct);

router.route("/filtered-products").post(filterProducts);

module.exports = router;
