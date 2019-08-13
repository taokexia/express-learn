const express = require('express');
const multiparty = require('multiparty');
const router = express.Router();

router.post('/uploadimg', function (req, res, next) { // 上传图像
  //生成multiparty对象，并配置上传目标路径
  var form = new multiparty.Form();
  //设置编辑
  form.encoding = 'utf-8';
  //设置文件存储路径
  form.uploadDir = "./static/files/";
  //设置单文件大小限制
  form.maxFilesSize = 2 * 1024 * 1024;
  // form.maxFields = 1000;  设置所以文件的大小总和
  // 上传完成后处理
  form.parse(req, function (err, fields, files) {
    console.log(fields);
    var filesTmp = JSON.stringify(files, null, 2);
    console.log(filesTmp);
    if (err) {
      console.log('parse error: ' + err);
      res.json({
        errno: 1
      });
    } else {
      var inputFile = files.file[0];
      var uploadedPath = inputFile.path;
      var array = inputFile.originalFilename.split('.');
      var imgtype = array[array.length - 1];
      var dstPath = './static/files/' + new Date().getTime() + '.' + imgtype;
      //重命名为真实文件名
      fs.rename(uploadedPath, dstPath, function (err) {
        if (err) {
          console.log('rename error: ' + err);
          res.json({
            errno: 1
          });
        } else {
          var mess = {
            username: fields.username,
            src: fields.src,
            img: dstPath,
            roomid: fields.roomid
          };
          var message = new Message(mess);
          message.save(function (err, mess) {
            if (err) {
              console.log(err);
            }
            console.log(mess);
          });
          console.log('rename ok');
          res.json({
            errno: 0
          });
        };
      });
    };
  });
});

module.exports = router;