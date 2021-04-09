const shapeEntity = require("../entities/shapeEntity")

const shapeService = {};

shapeService.shape = async (shape, dimensions) => {
    try {
        if(shape === "square") {
            const square = await new shapeEntity.square(dimensions, "square").execute()
            return ({ details: `area of ${shape}`, result: square})
        }

        if (shape === "rectangle")

    } catch(err) {
        console.log(err)
        throw new Error("something went wrong");
    }
}

module.exports = shapeService

