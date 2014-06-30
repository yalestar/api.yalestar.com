var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , melt_banana = require('./routes/melt_banana')
  , mongoose = require('mongoose')
  , http = require('http')
  , path = require('path');

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

// Load models
var modelsPath = path.join(__dirname, 'models');
fs.readdirSync(modelsPath).forEach(function (file) {
  require(modelsPath + '/' + file);
});

// Routes
app.get('/', routes.index);
app.get('/v1/mb', melt_banana.index);
app.get('/quote/random', user.randomQuote);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
