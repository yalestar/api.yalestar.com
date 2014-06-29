var fs = require('fs');
var path = require('path');
var readline = require('readline');
var pg = require('pg');
var connString = "postgres://api:api@localhost/yalestar_api";

var client = new pg.Client(connString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  var filePath = path.join(__dirname + '/mb_songs.txt');

  var rd = readline.createInterface({
      input: fs.createReadStream(filePath),
      output: process.stdout,
      terminal: false
  });

  rd.on('line', function(line) {
      var sql = "insert into melt_bananas(title, created_at, updated_at)";
      sql += "values('" + line + "', now(), now());"
      console.log(sql);
      // client.query(sql, function(err, result) {
      //   if(err) {
      //     return console.error('error running query', err);
      //   }
  // });

  
    client.end();
  });
});

