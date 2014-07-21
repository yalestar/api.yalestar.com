var express = require('express'),
    routes = require('./routes'),
    melt_banana = require('./routes/melt_banana'),
    subdivision = require('./routes/subdivision'),
    minutemen = require('./routes/minutemen'),
    pokes = require('./routes/pokes'),
    fantasia = require('./routes/fantasia'),
    rv = require('./routes/rv'),
    chillax = require('./routes/chillax'),
    don_caballero = require('./routes/don_caballero'),
    fakery = require('./routes/fakery'),
    mongoose = require('mongoose'),
    http = require('http'),
    passport = require('passport'),
    path = require('path');

var flash = require('connect-flash');

var LocalStrategy = require('passport-local').Strategy;
var db = require('./config/db');
var fs = require('fs');
var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('refractory'));
  app.use(express.session({ key: 'sid', cookie: { maxAge: 60000 }}));
  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

// ======================= Routes ===============================
require('./routes')(app);
// app.get('/', routes.index);
app.get('/v1/mb', melt_banana.index);
app.get('/v1/doncab', don_caballero.index);
app.get('/v1/subd', subdivision.index);
app.get('/v1/pokes', pokes.index);
app.get('/v1/fantasia', fantasia.index);
app.get('/v1/rv', rv.index);
app.get('/v1/chillax', chillax.index);
app.get('/v1/minutemen/title', minutemen.title);
app.get('/v1/minutemen/lyrics', minutemen.lyrics);
app.get('/v1/fakery/cp', fakery.cp);
app.get('/v1/fakery/bs', fakery.bs);
app.get('/v1/fakery/name', fakery.name);

app.get('/', function (req, res) {
  var msg = req.flash('info').length == 0 ? null : req.flash('info');
  res.render('index',
      {user: req.user,
        title: 'Silent Kid',
        message: msg
      }
  );
});


// passport config
var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

http.createServer(app).listen(app.get('port'), function () {
  console.log("Server listening on port " + app.get('port'));
});
