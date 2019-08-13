var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan'); // 日志文件
var mongoose = require("mongoose"); // 引入数据库
var cookieParser = require('cookie-parser'); // session存储
var session = require('cookie-session');
// var cors = require('cors'); // 跨域设置
var routes = require('./routes') // 路由

const config = require('config-lite')(__dirname) // 配置文件

// 处理数据库连接
mongoose.Promise = require('bluebird'); 
global.db = mongoose.connect("mongodb://localhost:27017/chat");

var app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild, Connection, Date, ETag'); 
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("X-Powered-By", ' 3.2.1')
      //这段仅仅为了方便返回json而已
  res.header("Content-Type", "application/json;charset=utf-8");
  if(req.method == 'OPTIONS') {
      //让options请求快速返回
      res.sendStatus(200); 
  } else { 
      next(); 
  }
});
// app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
// 服务器提交的数据 json 化
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// session 存储
app.use(cookieParser());
app.use(session({
  name: config.session.key,
  secret: config.session.secret,
  resave: false,
  saveUninitialized: true
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) { // 保存 session
  var _user = req.session.user
  app.locals.user = _user
  next()
})

routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
