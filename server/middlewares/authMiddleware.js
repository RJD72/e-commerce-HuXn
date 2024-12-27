const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const asyncHandler = require("./asyncHandler");

const authenticate = asyncHandler(async (req, res, next) => {
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(400);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Access denied" });
  }
};

module.exports = { authenticate, authorizeAdmin };
