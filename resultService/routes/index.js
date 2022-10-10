
let data = require('../../resultManagement/database/db.json')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(data)
  // res.send('helu')
});

module.exports = router;
