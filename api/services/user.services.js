const userEntity = require("../entities/user.entity");
const User = require("../data-access/user.dao")
const decryptPassword = require("../utils/encryptPassword").decryptPassword

const userService = {}

userService.register = async (userData) => {
    const user = await new userEntity(userData).execute()

    const createUser = await User.insert({
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
        console.log(user)
        await decryptPassword(user.getUserPassword, existingUser.password)
        return user
    } catch (err) {
        res.status(404).json({messgae: err.message})
    }


    
}

module.exports = userService