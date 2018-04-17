var express = require('express');
var router = express.Router();
// some new comment
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// the users routes js page blablablabla
module.exports = router;
