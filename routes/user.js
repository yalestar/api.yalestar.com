
exports.list = function(req, res) {
  req.accepts('application/json');
  res.json({"message": "asldkjf asldkf asdlkf asldfk "});
  // res.send("respond laskdjflaksjdf with a resource");
};

exports.randomQuote = function(req, res) {
  // app.get('/quote/random', function(req, res) {
  var id = Math.floor(Math.random() * quotes.length);
  var q = quotes[id];
  res.json(q);
  // });

}