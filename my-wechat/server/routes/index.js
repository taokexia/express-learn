module.exports = (app) => {
  app.get('/', function(req, res) {
    res.send('hello express!');
  })
  app.use('/file', require('./file.js'));
  app.use('/users', require('./users.js'));
  app.use('/message', require('./message.js'));
  app.use('/robot', require('./robot.js'));
};
