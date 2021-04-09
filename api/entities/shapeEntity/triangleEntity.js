class makeTriangle {
    constructor({dimensions}, shape) {
        // console.log(shape)
        this._shape= shape
        this._sideA =  parseInt(dimensions.sideA) || 0
        this._sideB =  parseInt(dimensions.sideB) || 0
        this._sideC = parseInt(dimensions.sideC) || 0
        this._semiPerimeter = 0
    }

    _getArea() {
        let s = this._semiPerimeter
        let a = this._sideA
        let b = this._sideB
        let c = this._sideC

        let sum =  (s) * ((s-a) * (s-b) * (s-c));
        console.log((sum))
        let result = Math.floor((Math.sqrt(Math.abs(sum))))
        return result
    }

    _getSemiPerimeter() {
        this._semiPerimeter = (this._sideA + this._sideB + this._sideC) / 2
    }

    getSides() {
        return {sideA: this._sideA, sideB: this._sideB}
    }

    async execute() {
        await this._getSemiPerimeter()
       return await  this._getArea()
    }
}

module.exports = makeTriangle