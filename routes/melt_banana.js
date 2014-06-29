var pg = require('pg');
var conString = "postgres://api:api@localhost/yalestar_api";

var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  
});


exports.index = function(req, res) {
var titty = null;
  client.query('SELECT title from melt_bananas order by RANDOM() limit 1;', function(err, result) {
      if(err) { return console.error('error running query', err);  }
    // console.log(result.rows[0]);
    titty = result.rows[0];
    console.log(titty);
    // client.end();
  });
  res.send({ title: titty });
};