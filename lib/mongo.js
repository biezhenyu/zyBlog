const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')  // 链接MongoDB
const mongolass = new Mongolass()
mongolass.connect(config.mongodb)

/*
 * required: true 表示该字段是必需的，default: xxx 用于创建文档时设置默认值。更多关于 Mongolass 的 schema 的用法
 * Mongolass 中的 model 你可以认为相当于 mongodb 中的 collection，只不过添加了插件的功能。
*/

// User的schema
exports.User = mongolass.model('User', {
  name: { type: 'string', required: true },
  password: { type: 'string', required: true },
  avatar: { type: 'string', required: true },
  gender: { type: 'string', enum: ['m', 'f', 'x'], default: 'x' },
  bio: { type: 'string', required: true }
})
exports.User.index({ name: 1 }, { unique: true }).exec()// 根据用户名找到用户，用户名全局唯一
