var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter        = require('./routes/index');
var usersRouter        = require('./routes/users');
var registrationRouter = require('./routes/api/registration')
var loginRouter        = require('./routes/api/login');
var State_City         = require('./routes/api/statecity')
var recentnpostRouter  = require('./routes/api/recentpost')
var updatepostRouter   = require('./routes/api/updatepost');
var currentpostRouter  = require('./routes/api/currentpost');
var politicespostRouter= require('./routes/api/politicespost');
var sportpostRouter    = require('./routes/api/sportpost');
// var signInRouter = require('./routes/api/signin')
// var userDataRouter = require('./routes/api/userFetchData')
// var statecityDataRouter = require("./routes/api/statecity")
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/reg',registrationRouter);
app.use('/login',loginRouter);
app.use('/statecity', State_City);
app.use('/recent', recentnpostRouter);
app.use('/update',updatepostRouter);
app.use('/current',currentpostRouter);
app.use('/politice',politicespostRouter);
app.use('/sport',sportpostRouter)



// app.use('/signinData', signInRouter);
// app.use('/fetchData', userDataRouter);
// app.use('/state_city', statecityDataRouter);


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
