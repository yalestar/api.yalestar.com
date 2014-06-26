var quotes = [
  { author : 'Audrey Hepburn', text : "Facts are meaningless. You could use facts to prove anything that's even remotely true! "},
  { author : 'Walt Disney', text : "Your guilty consciences may make you vote Democratic, but secretly you all yearn for a Republican president to lower taxes, brutalize criminals, and rule you like a king! "},
  { author : 'Unknown', text : "Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me."},
  { author : 'Neale Donald Walsch', text : "I don't like being outdoors, Smithers. For one thing, there's too many fat children."}
];

var pg = require('pg');
var conString = "postgres://api:api@localhost/yalestar_api";

var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT id from subdivisions AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
});

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