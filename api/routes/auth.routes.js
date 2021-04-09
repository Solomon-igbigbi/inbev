const express = require("express");
const router = express.Router()
const userController = require("../controllers/userController.js")
const expressCallBack = require("../utils/express.callback.utils")

router.post("/register", userController.register)
router.post("/login", userController.login)

module.exports = router