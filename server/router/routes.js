const express = require("express");
const router = express.Router();
const cors = require("cors");
const authController = require("../controller/authController");

router.use(
  cors({
    credentials: true,
    origin: "",
  })
);

/** POST  */
router.post("/api/register", authController.registerUser); // Register User
router.post("/api/login", authController.loginUser); // Login

module.exports = router;
