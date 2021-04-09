const hashPassword = require("../utils/encryptPassword").hashPassword
const  { v4: uuidv4 } = require('uuid');
const validate = require("../validators/userValidator");

class makeUser {
    constructor(userData) {
        this._userData = userData;
    }

    async _validate() {
        return validate.validateUserSignUp(this._userData)
    }

    async _encryptUserPassword() {
        this._userData.password = await hashPassword(this._userData.password);
    }

    async _setUserId() {
        this._userData.uuid = uuidv4()
    }

    async validateLogin() {
        const { error } = await validate.validateUserLogin(this._userData)
        if(error) return  error

        return this
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
        const {error} = await this._validate() 
        if(error) return  error

        await this._encryptUserPassword();
        await this._setUserId();
        
    
        Object.freeze(this._userData);

        return this;
    }
}

module.exports = makeUser
