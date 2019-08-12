var mongoose = require("mongoose");

// 聊天记录模型
var MessageSchema = new mongoose.Schema({
  username: String, // 用户名
  src: String, 
  msg: { // 消息
    type: String,
    default: ''
  },
  roomid: String, // 房间id
  img: { // 图片
    type: String,
    default: ''
  },
  time: { // 时间
    type: Date,
    default: Date.now()
  }
});

//静态方法
MessageSchema.statics = {
  fetch: function (cb) {
    return this
      .find({})
      .sort('time')
      .exec(cb)
  },
  findById: function (id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  }
};
module.exports = MessageSchema;