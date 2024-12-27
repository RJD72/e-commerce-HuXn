const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // Set JWT as an HTTP-Only
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
  });

  return token;
};

module.exports = generateToken;
