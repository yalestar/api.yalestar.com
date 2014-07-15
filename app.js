var express = require('express'),
  routes = require('./routes'),
  melt_banana = require('./routes/melt_banana'),
  subdivision = require('./routes/subdivision'),
  minutemen = require('./routes/minutemen'),
  pokes = require('./routes/pokes'),
  chillax = require('./routes/chillax'),
  don_caballero = require('./routes/don_caballero'),
  fakery = require('./routes/fakery'),
  mongoose = require('mongoose'),
  http = require('http'),
  path = require('path');

var db = require('./config/db');
var fs = require('fs');
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


// Routes
app.get('/', routes.index);
app.get('/v1/mb', melt_banana.index);
app.get('/v1/doncab', don_caballero.index);
app.get('/v1/subd', subdivision.index);
app.get('/v1/pokes', pokes.index);
app.get('/v1/chillax', chillax.index);
app.get('/v1/minutemen/title', minutemen.title);
app.get('/v1/minutemen/lyrics', minutemen.lyrics);
app.get('/v1/fakery/cp', fakery.cp);
app.get('/v1/fakery/bs', fakery.bs);
app.get('/v1/fakery/name', fakery.name);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
