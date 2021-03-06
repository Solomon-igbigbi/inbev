const userService = require("../services/user.services")


const userController = {}

userController.register = async (req, res) => {
    try{
        // call user service to register user
        const user = await userService.register(req.body)
        return res.status(201).json(user)
    } catch(err) {
        return res.status(400).json({message: err.message})
    }
  
}

userController.login = async (req, res) => {
    try {
        // call user service to log user in
        const user = await userService.login(req.body)
        return res.status(200).json(user)
    }

    catch(err) {
        return res.status(400).json({message: err.message})
    }
}


module.exports = userController;