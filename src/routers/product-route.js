const express = require("express")
const productController = require("../Controllers/product-controller")
const router = express.Router()

router.get("/landing", productController.getProductLanding)
router.get("/:productId", productController.getProductById)
router.get("/",productController.getProducts)

module.exports = router;