const websocket = require('socket.io');
const Message = require('./models/message');

module.exports = (server) => {
  const io = websocket(server);
  global.users= {};

  io.on("connection", function(socket) { 
    //监听用户发布聊天内容
    io.on("message", function(obj) {
      //向所有客户端广播发布的消息
      var mess = {
        username: obj.username,
        src: obj.src,
        msg: obj.msg,
        img: obj.img,
        roomid: obj.room
      }
      io.to(mess.roomid).emit("message", mess);
      console.log(obj.username + '对房' + mess.roomid+'说：'+ mess.msg);
      if (obj.img === '') {
        var message = new Message(mess);
        message.save(function (err, mess) {
          if (err) {
            console.log(err);
          };
          console.log(mess);
        });
      };
    });

    // 登录事件
    socket.on('login',function (obj) {
      socket.name = obj.name;
      socket.room = obj.roomid;
      if (!global.users[obj.roomid]) {
        global.users[obj.roomid] = {};
      };
      global.users[obj.roomid][obj.name] = obj;
      socket.join(obj.roomid);
      io.to(obj.roomid).emit('login', global.users[obj.roomid]);
      console.log(obj.name + '加入了' + obj.roomid);
    });

    // 登出事件
    socket.on('logout',function (obj) {
      delete  global.users[obj.roomid][obj.name];
      console.log(obj.name + '退出了' + obj.roomid);
      io.to(obj.roomid).emit('logout', global.users[obj.roomid]);
    });

    // 断开连接
    socket.on('disconnect', function () {
      if (global.users[socket.room]) {
        delete global.users[socket.room][socket.name];
        // 用户监听用退出聊天室
        console.log(socket.name + '退出了' + socket.room);
        io.to(socket.room).emit('logout', global.users[socket.room]);
      }
    })
  });
};
