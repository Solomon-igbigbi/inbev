const jwt = require("jsonwebtoken")

const jwtUtils = {}

jwtUtils.generateToken = (userData) => {
    console.log(userData)
    const token = jwt.sign({userId: userData.uuid, userEmail: userData.email}, process.env.JWTPrivateKey, {
        expiresIn: '1h'
    });

    return token
}

module.exports = jwtUtils