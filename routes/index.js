const express = require("express");
const router = express.Router();

const productRoutes = require('./product');
const demoRoutes = require('./demo');
router.use('/product' , productRoutes);
router.use('/demo' , demoRoutes);

module.exports = router;