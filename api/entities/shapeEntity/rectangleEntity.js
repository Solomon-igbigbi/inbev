const History = require("../../data-access/history.dao")

class makeRectangle {
    constructor({dimensions}, shape, user) {
        this._userId = user.userId
        this._shape= shape
        this._sideA =  parseInt(dimensions.sideA) || 0
        this._sideB =  parseInt(dimensions.sideB) || 0
    }

    _getArea() {
        let result = this._sideA * this._sideB
        this._saveToHistory(result);
        return result
    }

    async _saveToHistory(result) {
        const newHistory = await History.insert({
            user: this._userId,
            shape: this._shape,
            calculation: `Area of the ${this._shape} with sides ${this._sideA} and ${this._sideB} = ${result} `
        })
    }

    getSides() {
        return {sideA: this._sideA, sideB: this._sideB}
    }

    async execute() {
       return await  this._getArea()
    }
}

module.exports = makeRectangle