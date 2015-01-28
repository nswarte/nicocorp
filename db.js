// "cleardb": [
//   {
//     "credentials": {
//     "hostname": "us-cdbr-iron-east-01.cleardb.net",
//     "jdbcUrl": "jdbc:mysql://b5afbbc4381dc2:029f5105@us-cdbr-iron-east-01.cleardb.net:3306/ad_befc0b570cae7d4",
//     "name": "ad_befc0b570cae7d4",
//     "password": "029f5105",
//     "port": "3306",
//     "uri": "mysql://b5afbbc4381dc2:029f5105@us-cdbr-iron-east-01.cleardb.net:3306/ad_befc0b570cae7d4?reconnect=true",
//     "username": "b5afbbc4381dc2"
//     },
//     "label": "cleardb",
//     "name": "goldnico-db",
//     "plan": "spark",
//     "tags": [
//     "Data Stores",
//     "Data Store",
//     "mysql",
//     "relational"
//     ]
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-01.cleardb.net',
  user     : 'b5afbbc4381dc2',
  password : '029f5105'
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
connection.query('SHOW DATABASES', function(err, rows) {
  console.log(rows);
});
connection.query('CREATE DATABASE appdb', function(err, rows) {
  console.log(err);
});