const History = require("../../data-access/history.dao")

class makeTriangle {
    constructor({dimensions}, shape, user) {
        this._userId = user.userId
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
        const result = this._semiPerimeter = (this._sideA + this._sideB + this._sideC) / 2
        this._saveToHistory(result)
    }

    async _saveToHistory(result) {
        const newHistory = await History.insert({
            user: this._userId,
            shape: this._shape,
            calculation: `Area of the ${this._shape} with sides ${this._sideA} and ${this._sideB} and ${this._sideC} = ${result} `
        })
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