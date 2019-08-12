const express = require('express');
const router = express.Router();
var Message = require('../models/message')

// 信息
router.get('/', function (req, res) {
  var id = req.query.roomid;
  Message.find({roomid: id}).sort({"time": -1}).limit(80).exec(function (err, message) {
    if (err) {
      console.log(err);
    } else {
      res.json({
        errno: 0,
        data: message.reverse()
      });
    }
  });
});

module.exports = router;