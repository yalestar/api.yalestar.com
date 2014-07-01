var mongoose = require('mongoose');

var Schema = mongoose.Schema({
  title: { type: String },
  lyrics: { type: String },
  active: { type: Boolean },
  created: { type: Date , default: Date.now }
});

Schema.statics.random = function(callback) {
  this.count(function(err, count) {
    if (err) {return callback(err); }
    var rand = Math.floor(Math.random() * count);
    this.findOne({}).skip(rand).exec(callback);
  }.bind(this));
};

var Minutemen = mongoose.model('Minutemen', Schema, 'minutemen' );

exports.title = function(req, res) {
  Minutemen.random(function (err, data) {
    res.send({ title: data.title });
  });
};

exports.lyrics = function(req, res) {
  Minutemen.random(function (err, data) {
    res.send({ title: data.title, lyrics: data.lyrics });
  });
};
