const getUser = require("../data-access/user.dao")
const userService = require("../services/user.services")


const userController = {}

userController.register = async (req, res) => {
    const existingUser = await getUser.findByEmail(req.body.email)
    if (existingUser) return res.status(400).json({message: "user already exist"})

    const user = await userService.register(req.body)
    return res.status(201).json(user)
}

userController.login = async (req, res) => {
    const existingUser = await getUser.findByEmail(req.body.email)
    if (!existingUser) return res.status(404).json({message: "user does not exist"})
    
    const user = await userService.login(req.body, existingUser)

    return res.status(200).json(user)
    
}


module.exports = userController 