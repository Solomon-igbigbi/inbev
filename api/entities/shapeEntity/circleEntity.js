class makeCircle {
constructor({dimensions}, shape) {
        console.log(dimensions)
        this._shape= shape
        this._radius =  parseInt(dimensions.radius) || 0
    }

    _getArea() {
        let pi = Math.PI.toFixed(2)
        let result = Math.floor(parseFloat(pi) * (this._radius * this._radius))
        return result
    }

    getSides() {
        return {sideA: this._sideA, sideB: this._sideB}
    }

    async execute() {
       return await  this._getArea()
    }
}

module.exports = makeCircle