var Faker = require('faker');

exports.bs = function(req, res) {
  var bs = Faker.Company.bs();
  res.send({bs: bs});
};

exports.cp = function(req, res) {
  var cp = Faker.Company.catchPhrase();
  console.log(cp);
  res.send({catchphrase: cp});
};

exports.name = function(req, res) {
  var name = Faker.Name.findName()
  res.send({name: name});
};
