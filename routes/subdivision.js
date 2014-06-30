var mongoose = require('mongoose');

var Schema = mongoose.Schema({
  first_part: { type: String },
  second_part: { type: String },
  third_part: { type: String },
  image_path: { type: String }
});

Schema.statics.random = function(callback) {
  this.count(function(err, count) {
    if (err) {return callback(err); }
    var rand = Math.floor(Math.random() * count);
    // TODO: make this randomize the first/second/third fields
    // (right now it'll always return e.g. Lake Acres)
    this.findOne({}).skip(rand).exec(callback);
  }.bind(this));
};

var Subdivision = mongoose.model('Subdivision', Schema, 'subdivisions' );

exports.index = function(req, res) {
  Subdivision.random(function (err, data) {
    console.log(data);
    subd = data.first_part + " ";
    subd += data.second_part + " ";
    subd += data.third_part;
    res.send({ title: subd.trim(), img: data.image_path});
  });
};
