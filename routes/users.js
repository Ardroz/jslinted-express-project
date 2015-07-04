/*jslint node: true, indent: 2,nomen:true */
'use strict';

var request = require('superagent');
var express = require('express');
var router = express.Router();

/* GET users listing. */
/*jslint unparam: true */
router.get('/', function (req, res, next) {
  request
    .get('http://localhost:8888/api/users')
    .set('Accept', 'application/json')
    .end(function(err, response){
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(response.body);
      }
    });
});
/*jslint unparam: false */

router.post('/', function (req, res) {
  request
    .post('http://localhost:8888/api/users')
    .send(req.body)
    .set('Accept', 'application/json')
    .end(function(err, response){
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(response.body);
      }
    });
});

module.exports = router;
