var mongoose = require('mongoose');
var random = require('mongoose-random');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/yalestar_api');

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
    console.log("-------------" + data.title);
    rt = data.title;
  });
  console.log(rt);
  res.send({ title: rt });
};
