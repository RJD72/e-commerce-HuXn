const router = require("express").Router();
const {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
} = require("../controllers/userController.js");
const {
  authenticate,
  authorizeAdmin,
} = require("../middlewares/authMiddleware.js");

router
  .route("/")
  .post(createUser)
  .get(authenticate, authorizeAdmin, getAllUsers);

router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);

router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

module.exports = router;
