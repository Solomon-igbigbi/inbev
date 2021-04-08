const bcrypt = require("bcrypt")

encrytions = {}

encrytions.hashPassword = (password) => {
    let encryptedPassword = bcrypt.hashSync(password, 10)
    return encryptedPassword;
}

encrytions.decryptPassword = (password, existingUser) => {
    let encryptedPassword = bcrypt.compare(password, existingUser.password)
    if(!encryptedPassword) throw new Error('Password is incorrect')

    return encryptedPassword
}

module.exports = encrytions