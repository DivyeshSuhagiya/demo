const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController")

router.get('/get' , (req,res) => productController.product.get(req,res));
router.post('/post' , (req,res) => productController.product.post(req,res));

module.exports = router