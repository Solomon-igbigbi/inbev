const Joi = require('joi');

const joiValidate = {}

joiValidate.validateUserSignUp = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        email: Joi.string().email({ minDomainSegments: 2}).email().required(),
        password: Joi.string().min(6).max(225).required(),
    })

    return schema.validate(user)
}

joiValidate.validateUserLogin = (user) => {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2}).email().required(),
        password: Joi.string().min(6).max(225).required(),
    })

    return schema.validate(user)
}

module.exports = joiValidate;