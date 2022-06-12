const express = require("express");
const router = express.Router();

const demoRoutes = require('./demo');
router.use('/demo' , demoRoutes);

module.exports = router;