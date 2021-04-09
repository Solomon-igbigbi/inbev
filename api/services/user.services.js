const userEntity = require("../entities/user.entity");
const User = require("../data-access/user.dao")
const decryptPassword = require("../utils/encryptPassword").decryptPassword
const jwtToken = require('../utils/jwt')

const userService = {}

userService.register = async (userData) => {
    const user = await new userEntity(userData).execute()

    const createUser = await User.insert({
        uuid: user.getUserId(),
        userName: user.getUserName(),
        email: user.getUserEmail(),
        password: user.getUserPassword()
    })
    
    if(!createUser) throw new Error(" User not Created")

    const newUser = await User.findByEmail(user.getUserEmail())
    return newUser
}

userService.login = async (userData, existingUser) => {
    try {
        const user = await new userEntity(userData)
        await decryptPassword(user.getUserPassword(), existingUser.password)

        const token = await jwtToken.generateToken(existingUser)
        return ({user, token, sucess: true})
    } catch (err) {
        return({messgae: err.message})
    }


    
}

module.exports = userService