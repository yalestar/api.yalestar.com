var mongoose = require('mongoose');

var Schema = mongoose.Schema({
  title: { type: String },
  created_at: { type: Date , default: Date.now }
});

Schema.statics.random = function(callback) {
  this.count(function(err, count) {
    if (err) {return callback(err); }
    var rand = Math.floor(Math.random() * count);
    this.findOne({}, 'title').skip(rand).exec(callback);
  }.bind(this));
};

var DonCaballero = mongoose.model('DonCaballero', Schema, 'don_caballero' );

exports.index = function(req, res) {
  var rt = null;
  DonCaballero.random(function (err, data) {
    rt = data.title;
    res.send({ title: rt });
  });
};
