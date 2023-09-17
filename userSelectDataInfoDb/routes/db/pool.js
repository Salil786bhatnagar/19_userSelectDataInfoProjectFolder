var mysql = require("mysql");

var pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'demo', 
  multipleStatements: true,
});

module.exports = pool;