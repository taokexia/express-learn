var express = require('express');
var router = express.Router();
var User = require('../models/user')

// 注册
router.post('/signup', function (req, res) {
  var _user = req.body;
  console.log(_user);
  User.findOne({name: _user.name}, function (err, user) {
    if (err) {
      console.log(err);
    }
    if (user) {
      res.json({
        errno: 1,
        data: '用户名已存在'
      });
    } else {
      var user = new User(_user);
      user.save(function (err, user) {
        if (err) {
          console.log(err);
        }
        res.json({
          errno: 0,
          data: '注册成功'
        });
      });
    };
  });
});

// 登录
router.post('/signin', function (req, res) {
  console.log(req.body);
  var _user = req.body;
  var name = _user.name;
  var password = _user.password;
  console.log(password);
  User.findOne({name: name}, function (err, user) {
    if (err) {
      console.log(err);
    }
    console.log(user)
    if (!user) {
      res.json({
        errno: 1,
        data: '用户不存在'
      });
    } else {
      if (!!password) {
        user.comparePassword(password, function (err, isMatch) {
          if (err) {
            console.log(err);
          }
          if (isMatch) {
            req.session.user = user;
            console.log('success');
            res.json({
              errno: 0,
              data: '登录成功',
              name: name,
              src: user.src
            });
          } else {
            res.json({
              errno: 1,
              data: '密码不正确'
            });
            console.log('password is not meached');
          }
        })
      } else {
        res.json({
          errno: 1,
          data: '登录失败'
        });
      };
    };

  });
});

module.exports = router;
