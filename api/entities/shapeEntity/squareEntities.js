class makeSquare {
    constructor({dimensions}, shape) {
        console.log(dimensions)
        // console.log(shape)
        this._shape= shape
        this._sideA =  parseInt(dimensions.sideA) || 0
        this._sideB =  parseInt(dimensions.sideB) || 0
    }

    _getArea() {
        const result = this._sideA * this._sideB
        return result.toFixed(2)
    }

    getSides() {
        return {sideA: this._sideA, sideB: this._sideB}
    }

    async execute() {
       return await  this._getArea()
    }
}

module.exports = makeSquare