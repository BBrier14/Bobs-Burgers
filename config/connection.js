// Connect to MySQL
//================================
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "JeepJKU2015",
  database: "burgers_db"
});

// This does the actual connection using the above information
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connection as id " + connection.threadId);
});

// Export
module.exports = connection;
