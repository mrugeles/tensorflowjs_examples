var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var imageClassificationRouter = require('./routes/image_classification');
var objectDetectionRouter = require('./routes/object_detection');
var toxicityRouter = require('./routes/toxicity');
var qnaRouter = require('./routes/qna');
var poseRouter = require('./routes/pose');
var handPoseRouter = require('./routes/handpose');

const fileUpload = require('express-fileupload');
var app = express();
var port = 8080

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/image_classification', imageClassificationRouter);
app.use('/object_detection', objectDetectionRouter);
app.use('/toxicity', toxicityRouter);
app.use('/qna', qnaRouter);
app.use('/pose', poseRouter);
app.use('/handpose', handPoseRouter);

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

app.listen(port, function() {
  console.log('app started');
});
