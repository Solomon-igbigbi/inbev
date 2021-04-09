const shapeService = require("../services/shape.services")

const shapeController = {}
shapeController.shape = async (req, res) => {
    try{
        const value = await shapeService.shape(req.params.shape.toLowerCase(), {dimensions: req.query}, req.user)
        return res.status(201).json(value)
    } catch(error) {
        return res.status(400).json(error.message)
    }
   
}

shapeController.getShapes = async (req, res) => {
    try{
        const value = await shapeService.getShapes(req.user)
        return res.status(200).json(value)
    } catch(error) {
        return res.status(400).json(error.message)
    }
}

module.exports = shapeController