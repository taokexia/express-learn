const express = require('express');
const router = express.Router();
const superagent = require('superagent');

// 机器人消息
router.get('/', function (req, res) {
  var response = res
  var info = req.query.info
  var userid = req.query.id
  var key = 'ae466aa3975048f79d9f966b5189aacf'
  superagent.post('http://www.tuling123.com/openapi/api')
    .send({info, userid, key})
    .end((err, res) => {
      if (err) {
        console.log(err)
      }
      response.json({
        data: res.text
      })
    })
})

module.exports = router