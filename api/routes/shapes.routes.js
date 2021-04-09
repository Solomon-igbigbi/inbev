const express = require("express");
const router = express.Router()
const jwtToken = require('../middlewares/jwt')
const shapeController = require("../controllers/shapeController")

router.post("/:shape", [jwtToken.verifyUser], shapeController.shape)
router.get("/:shape", [jwtToken.verifyUser], shapeController.getShapes)




module.exports = router