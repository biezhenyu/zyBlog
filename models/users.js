const User = require('../lib/mongo').User

module.exports = {
  // 注册一个用户
  create: (user) => {
    return User.create(user).exec()
  },

  // 通过用户名获取用户信息
  getUserByName: (name) => {
    return User
      .findOne({name: name})   // 查找某一条数据
      .addCreatedAt()   // addCreatedAt 自定义插件（通过 _id 生成时间戳）
      .exec()
  }
}