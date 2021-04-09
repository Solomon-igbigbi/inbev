const bcrypt = require("bcrypt")

encrytions = {}

encrytions.hashPassword = (password) => {
    let encryptedPassword = bcrypt.hashSync(password, 10)
    return encryptedPassword;
}

encrytions.decryptPassword = async (password, existingUserPassword) => {
    let encryptedPassword = await bcrypt.compare(password, existingUserPassword)
    if(!encryptedPassword) throw new Error('Password is incorrect')

    return encryptedPassword
}

module.exports = encrytions