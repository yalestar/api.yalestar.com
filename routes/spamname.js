var mongoose = require('mongoose');

var Schema = mongoose.Schema({
  name: { type: String }
});

Schema.statics.random = function(callback) {
  this.count(function(err, count) {
    console.log("ddash--------------------");
    if (err) {return callback(err); }
    var rand = Math.floor(Math.random() * count);
    console.log(rand);
    this.findOne({}, 'name').skip(rand).exec(callback);
  }.bind(this));
};

var Spamname = mongoose.model('Spamname', Schema, 'spamnames' );

exports.index = function(req, res) {
  var rt = null;
  Spamname.random(function (err, data) {
    res.send({ name: data.name });
  });
};
