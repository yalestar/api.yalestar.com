var mongoose = require('mongoose');

var Schema = mongoose.Schema({
  first: { type: String },
  second: { type: String }
});

Schema.statics.findRandom = function(callback) {
  this.count(function(err, count) {
    if (err) {return callback(err); }
    var rand = Math.floor(Math.random() * count);
    this.findOne({}, {'name': 1}).skip(rand).exec(callback);
  }.bind(this));
};

var RV = mongoose.model('RV', Schema, 'rvs' );

exports.index = function(req, res) {
  RV.random(function (err, data) {
    console.log(data);
    subd = data.first + " ";
    subd += data.second;
    res.send({ title: subd.trim(), img: data.image_path});
  });
};
