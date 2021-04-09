const jwt = require("jsonwebtoken")

const jwtUtils = {}

jwtUtils.generateToken = (userData) => {
    console.log(userData)
    const token = jwt.sign({userId: userData.uuid, userEmail: userData.email}, process.env.JWTPrivateKey, {
        expiresIn: '5h'
    });

    return token
}

jwtUtils.verifyUser = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWTPrivateKey);
        req.user = decoded;
        next()
    } catch(error) {
        return res.status(401).json({
            message: "user not logged in"
        })
    }
}

module.exports = jwtUtils