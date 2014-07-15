var mongoose = require('mongoose');

var Schema = mongoose.Schema({
  name: { type: String },
  description: { type: String }
});

Schema.statics.random = function(callback) {
  this.count(function(err, count) {
    if (err) {return callback(err); }
    var rand = Math.floor(Math.random() * count);
    this.findOne({}, {'name': 1, 'description': 1}).skip(rand).exec(callback);
  }.bind(this));
};

var Pokethulu = mongoose.model('Pokethulu', Schema, 'pokethulu' );

exports.index = function(req, res) {
  var rt = null;
  Pokethulu.random(function (err, data) {
    rt = data.name + " " + data.description;
    res.send({ pokethulu: rt });
  });
};
