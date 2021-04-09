const shapeEntity = require("../entities/shapeEntity")

const shapeService = {};

shapeService.shape = async (shape, dimensions) => {
    try {
        if(shape === "square") {
            const result = await new shapeEntity.square(dimensions, shape).execute()
            return ({ details: `area of ${shape}`, shape, result})
        }

        if (shape === "rectangle") {
            const result = await new shapeEntity.rectangle(dimensions, shape).execute()
            return({ details: `area of ${shape}`, shape, result})
        }

        if (shape === "triangle") {
            const result = await new shapeEntity.triangle(dimensions, shape).execute()
            return({ details: `area of ${shape}`, shape, result})
        }

        if (shape === "circle") {
            const result = await new shapeEntity.circle(dimensions, shape).execute()
            return({ details: `area of ${shape}`, shape, result, })
        }

    } catch(err) {
        throw new Error("something went wrong");
    }
}

module.exports = shapeService

