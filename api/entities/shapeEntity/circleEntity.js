const History = require("../../data-access/history.dao")

class makeCircle {
constructor({dimensions}, shape, user) {
        this._userId = user.userId
        this._shape= shape
        this._radius =  parseInt(dimensions.radius) || 0
    }

    _getArea() {
        let pi = Math.PI.toFixed(2)
        let result = Math.floor(parseFloat(pi) * (this._radius * this._radius))
        this._saveToHistory(result)
        return result
    }

    async _saveToHistory(result) {
        const newHistory = await History.insert({
            user: this._userId,
            shape: this._shape,
            calculation: `Area of the ${this._shape} with radius ${this._radius} = ${result} `
        })
    }

    getSides() {
        return {sideA: this._sideA, sideB: this._sideB}
    }

    async execute() {
       return await  this._getArea()
    }
}

module.exports = makeCircle