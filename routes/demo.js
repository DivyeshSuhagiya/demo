const express = require("express");
const router = express.Router();

const demoController = require("../controllers/demoController")

router.get('/get' , (req,res) => demoController.demo.get(req,res));
router.post('/post' , (req,res) => demoController.demo.post(req,res));

module.exports = router