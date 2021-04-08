const hashPassword = require("../utils/encryptPassword").hashPassword

class makeUser {
    constructor(userData) {
        this._userData = userData;
    }

    async _encryptUserPassword() {
        this._userData.password = await hashPassword(this._userData.password);
    }

    getUserName() {
        return this._userData.name;
    }

    getUserEmail() {
        return this._userData.email;
    }

    getUserPassword() {
        return this._userData.password;
    }

    async execute(){
        await this._encryptUserPassword();
    
    Object.freeze(this._userData);

    return this;
    }
}

module.exports = makeUser
