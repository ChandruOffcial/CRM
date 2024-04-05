const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const authMiddleware = require("../Middleware/authMiddleware");
const dashboardController = require('../controller/dashBoard')

/** POST  */
router.post("/api/register", authController.registerUser); // Register User
router.post("/api/login", authController.loginUser); // Login
router.post("/api/forgotPassword", authMiddleware.verifyUser, authController.generateOTP); // Generate OTP
router.post("/api/verifyOTP", authMiddleware.verifyRoll, authController.verifyOTP); // VerifyOTP
router.post("/api/resetPassword", authMiddleware.verifyRoll, authController.updatePassword); // Reset Password

/** GET */

router.get('/api/dashboard/employees', dashboardController.getAllEmployees) // Get All Employees

module.exports = router;
