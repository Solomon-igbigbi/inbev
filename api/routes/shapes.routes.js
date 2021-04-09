const express = require("express");
const router = express.Router()
const jwtToken = require('../middlewares/jwt')
const shapeController = require("../controllers/shapeController")

router.get("/:shape", [jwtToken.verifyUser], shapeController.shape)




module.exports = router