var express = require('express');
var router = express.Router();
// some new comment
// a new comment on 4-19-2018
// a new comment on 4-19
// it's 420 maaaaaaaaan
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
