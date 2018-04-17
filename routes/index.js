var express = require('express');
var router = express.Router();
// new comment! 3
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// bla bla bla, just another test from the CLI
module.exports = router;
