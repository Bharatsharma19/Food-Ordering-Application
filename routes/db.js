var mysql = require("mysql");

var pool = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "foodie",
  user: "root",
  password: "112233",
  multipleStatements: true,
});

module.exports = pool;

// Bharat Sharma
