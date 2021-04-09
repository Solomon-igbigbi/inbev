const hashPassword = require("../utils/encryptPassword").hashPassword
const  { v4: uuidv4 } = require('uuid');

class makeUser {
    constructor(userData) {
        this._userData = userData;
    }

    async _encryptUserPassword() {
        this._userData.password = await hashPassword(this._userData.password);
    }

    async _setUserId() {
        this._userData.uuid = uuidv4()
        console.log(this._userData.uuid)
    }

    getUserId() {
        return this._userData.uuid
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
        await this._setUserId();
    
        Object.freeze(this._userData);

        return this;
    }
}

module.exports = makeUser
