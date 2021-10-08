const express = require('express')
const router = express.Router()

const productService = require("../services/ProductService");

router.post("/createAProduct",productService.createAProduct)

router.get("/getProducts",productService.getProducts)

router.get("/getCategories",productService.getCategories)

router.get("/getBestSeller",productService.getBestSeller)

router.get("/getAProduct/:id",productService.getAProduct)

router.put("/updateAProduct/:id",productService.updateAProduct)

router.delete("/deleteAProduct/:id",productService.deleteAProduct)

module.exports = router