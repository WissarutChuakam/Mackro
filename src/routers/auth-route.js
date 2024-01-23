const express = require("express")
const router = express.Router();
const authController = require("../Controllers/auth-controller")

router.post("/register",authController.register)
router.post("/login",authController.login)
router.post("/forget-password",authController.forgetPassword)
router.get("/forget-password/:token",authController.verifyForgetPassword)
router.post("/reset-password",authController.resetPaasword)

module.exports = router;
