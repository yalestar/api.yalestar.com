var mongoose = require('mongoose');

var Schema = mongoose.Schema({
  name: { type: String }
});

Schema.statics.random = function(callback) {
  this.count(function(err, count) {
    if (err) {return callback(err); }
    var rand = Math.floor(Math.random() * count);
    this.findOne({}, {'name': 1}).skip(rand).exec(callback);
  }.bind(this));
};

var Fantasia = mongoose.model('Fantasia', Schema, 'fantasia' );

exports.index = function(req, res) {
  var rt = null;
  Fantasia.random(function (err, data) {
    rt = data.name;
    res.send({ name: rt });
  });
};
