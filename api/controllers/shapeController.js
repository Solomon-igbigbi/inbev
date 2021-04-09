const shapeService = require("../services/shape.services")
const shapeController = {}

shapeController.shape = async (req, res) => {
    try{
        const value = await shapeService.shape(req.params.shape.toLowerCase(), {dimensions: req.query})
        return res.status(201).json(value)
    } catch(error) {
        return res.status(400).json(error)
    }
   
}

module.exports = shapeController