var pg = require('pg');
var connString = "postgres://api:api@localhost/yalestar_api";

var client = new pg.Client(connString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  var sql = 'SELECT * from subdivisions order by RANDOM() limit 1';
  client.query(sql, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    var part1 = result.rows[0]['first_part'];
    var part2 = result.rows[0]['second_part'];
    var part3 = result.rows[0]['third_part'];
    var img = result.rows[0]['image_path']; // TODO: add host
    var subd = part1 + " " + part2 + " " + part3;
    var obj = {subd: subd, img_path: img}
    console.log(obj);
    client.end();
  });
});
