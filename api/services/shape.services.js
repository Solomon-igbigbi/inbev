const shapeEntity = require("../entities/shapeEntity")
const History = require("../data-access/history.dao")


const shapeService = {};

shapeService.shape = async (shape, dimensions, user) => {
    console.log(user)
    try {
        if(shape === "square") {
            const result = await new shapeEntity.square(dimensions, shape, user).execute()
            return ({ details: `area of ${shape}`, shape, result})

        }

        if (shape === "rectangle") {
            const result = await new shapeEntity.rectangle(dimensions, shape, user).execute()
            return({ details: `area of ${shape}`, shape, result})
        }

        if (shape === "triangle") {
            const result = await new shapeEntity.triangle(dimensions, shape, user).execute()
            return({ details: `area of ${shape}`, shape, result})
        }

        if (shape === "circle") {
            const result = await new shapeEntity.circle(dimensions, shape, user).execute()
            return({ details: `area of ${shape}`, shape, result, })
        } 

        throw new Error(`${shape} isn't allowed`)

    } catch(err) {
        throw new Error(err.message);
    }
}

shapeService.getShapes = async (user) => {
    const result = await History.findByUuid(user.userId)
    return result
}

module.exports = shapeService;

