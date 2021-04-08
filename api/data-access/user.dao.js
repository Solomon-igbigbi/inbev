const userModel = require("../models/").User

const makeUser = {
    async findByEmail(email) {
        const result = await userModel.findOne({ where: { email }, attributes: { exclude: ['id'] } });
        console.log({message: result})
        return result;
      },
  
      async findByPhone(phone) {
        const result = await userModel.findOne({ where: { phone }, attributes: { exclude: ['id', 'password'] } });
        return result;
      },
  
      async findByUuid(user_uuid) {
        const result = await userModel.findOne({ where: { user_uuid }, attributes: { exclude: ['id', 'password'] } });
        return result;
      },
  
      async insert(userData) {
        const result = await userModel.create(userData);
        if (result) return true;
        return false;
      },
  
      async update(userData) {
        const update = await userModel.update(userData, { where: { user_uuid: userData.user_uuid } });
        if (update) return true;
        return false;
      },
  
      async remove(userData) {
        return "Not implemented";
      },
      
}
  

module.exports = makeUser