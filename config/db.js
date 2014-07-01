'use strict';
var mongoose = require('mongoose');

var config = {
  "db": "yalestar_api",
  "host": "localhost",
  "user": "",
  "pw": "",
  "port": 27017
};
console.log("===========================================================");
console.log("process.env.MONGOHQ_URL coming up:");
console.log(process.env.MONGOHQ_URL);
console.log("===========================================================");
var port = (config.port.length > 0) ? ":" + config.port : '';
var login = (config.user.length > 0) ? config.user + ":" + config.pw + "@" : '';
var uriString = process.env.MONGOHQ_URL ||  "mongodb://" + login + config.host + port + "/" + config.db;
var uriString = "mongodb://" + config.host + port + "/" + config.db;

var mongoOptions = { db: { safe: true } };

mongoose.connect(uriString, mongoOptions, function (err, res) {
  if (err) {
    console.log('ERROR connecting to: ' + uriString + '. ' + err);
  } else {
    console.log('connected to: ' + uriString);
  }
});


exports.mongoose = mongoose;
