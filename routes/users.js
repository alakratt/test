var express = require('express');
var router = express.Router();

// new comment 4-20
// it's 420 maaaaaaaaan
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
