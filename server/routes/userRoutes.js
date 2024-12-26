const router = require("express").Router();
const { createUser } = require("../controllers/userController.js");

router.post("/", createUser);

module.exports = router;
