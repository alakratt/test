var express = require('express');
var path = require('path');// new path
var favicon = require('serve-favicon'); //my favorite icon
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var videos = require('./routes/videos');
// some change to commit
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// on 4/172018 I made this comment for, you guessed it, another commit test

app.use('/', routes);
app.use('/users', users);
app.use('/api/videos', videos);
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err)
});

// error handlers

// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
// change made from master
// change made in testing

// new change in master
// second change in master
// second change in testing

module.exports = app;
