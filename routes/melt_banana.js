var mongoose = require('mongoose');

var Schema = mongoose.Schema({
  title: { type: String },
  active: { type: Boolean },
  created: { type: Date , default: Date.now }
});

Schema.statics.random = function(callback) {
  this.count(function(err, count) {
    if (err) {return callback(err); }
    var rand = Math.floor(Math.random() * count);
    this.findOne({}, 'title').skip(rand).exec(callback);
  }.bind(this));
};

var MeltBanana = mongoose.model('MeltBanana', Schema, 'melt_bananas' );

exports.index = function(req, res) {
  var rt = null;
  MeltBanana.random(function (err, data) {
    rt = data.title;
    res.send({ title: rt });
  });
};
