const express = require("express");
const router = express.Router()
const userController = require("../controllers/userController.js")
const jwtToken = require('../middlewares/jwt')

router.post("/register", userController.register)
router.post("/login", userController.login)

module.exports = router