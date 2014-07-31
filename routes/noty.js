var mongoose = require('mongoose');

var Schema = mongoose.Schema({
  name: { type: String }
});

Schema.statics.random = function(callback) {
  this.count(function(err, count) {
    if (err) {return callback(err); }
    var rand = Math.floor(Math.random() * count);
    this.findOne({'sfw': "true"}, {'name': 1}).skip(rand).exec(callback);
  }.bind(this));
};

var NOTY = mongoose.model('NOTY', Schema, 'names_of_the_year' );

exports.index = function(req, res) {
  var rt = null;
  NOTY.random(function (err, data) {
    rt = data.name;
    res.send({ name: rt });
  });
};
