const historyModel = require("../models/").History

const makeHistory = {
    async findByUuid(uuid) {
        const result = await historyModel.findAll({ where: { user: uuid }, attributes: { exclude: ['id', 'password'] } });
        return result;
    },

    async insert(data) {
        console.log(data)
        const result = await historyModel.create(data);
        if (result) return true;
        return false;
    },
  
    //   async findByPhone(phone) {
    //     const result = await userModel.findOne({ where: { phone }, attributes: { exclude: ['id', 'password'] } });
    //     return result;
    //   },
  
    //   async findByUuid(user_uuid) {
    //     const result = await userModel.findOne({ where: { user_uuid }, attributes: { exclude: ['id', 'password'] } });
    //     return result;
    //   },
  
    //   async insert(userData) {
    //     const result = await userModel.create(userData);
    //     if (result) return true;
    //     return false;
    //   },
  
    //   async update(userData) {
    //     const update = await userModel.update(userData, { where: { user_uuid: userData.user_uuid } });
    //     if (update) return true;
    //     return false;
    //   },
  
    //   async remove(userData) {
    //     return "Not implemented";
    //   },
     
}

module.exports = makeHistory