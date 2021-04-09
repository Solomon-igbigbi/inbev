class makeSquare {
    constructor({dimensions}, shape) {
        console.log(dimensions)
        // console.log(shape)
        this._shape= shape
        this._sideA =  dimensions.sideA || 0
        this._sideB =  dimensions.sideB || 0
    }

    _getArea() {
        // console.log(this._sideA * this._sideB)
        return (this._sideA * this._sideB)
    }

    getSides() {
        return {sideA: this._sideA, sideB: this._sideB}
    }

    async execute() {
       return await  this._getArea()
    }
}

module.exports = makeSquare