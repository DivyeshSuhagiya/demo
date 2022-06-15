const express = require("express");
const router = express.Router();

const userController = require("../Controllers/userCotroller");
router.get('/get', (req, res) => userController.user.get(req, res))

module.exports = router;