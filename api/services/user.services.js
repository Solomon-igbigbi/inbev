const userEntity = require("../entities/userEntity/user.entity");
const User = require("../data-access/user.dao")
const decryptPassword = require("../utils/encryptPassword").decryptPassword
const jwtToken = require('../middlewares/jwt')

const userService = {}

userService.register = async (userData) => {
    try {
        // make a new user object with inputed data
        const user = await new userEntity(userData).execute()
        if(user.details) return ({error: user.details[0].message})

        // check if the user already exists
        const existingUser = await User.findByEmail(userData.email)
        if (existingUser) return ({message: "user already exist"})

        // if user does not exist, create the user
        const createUser = await User.insert({
            uuid: user.getUserId(),
            userName: user.getUserName(),
            email: user.getUserEmail(),
            password: user.getUserPassword()
        })
        
        // if user failed to create, throw error
        if(!createUser) throw new Error("User not Created")

        // if user created, find the user and return it
        const newUser = await User.findByEmail(user.getUserEmail())
        return newUser

    } catch(err) {
        throw new Error(err)
    }
    
}

userService.login = async (userData) => {
    try {
        // make a new user entity and validate the inputed details
        const user = await new userEntity(userData).validateLogin()
        if(user.details) return ({error: user.details[0].message})

        // check if the user is registered
        const existingUser = await User.findByEmail(userData.email)
        if (!existingUser) return ({message: "user does not exist"})
        
        // check if the user pasword is correct
        await decryptPassword(user.getUserPassword(), existingUser.password)

        // generate token for the logged user
        const token = await jwtToken.generateToken(existingUser)
        return ({user: existingUser, token, sucess: true})

    } catch(err) {
        throw new Error({messgae: err.message})
    }


    
}

module.exports = userService