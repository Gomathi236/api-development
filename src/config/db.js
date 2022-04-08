var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database : "nodejsmysqlcrudapi"
});


con.connect(function(err) {
    con.on('error', function(err) {
        console.log("[mysql error]",err);
      });
  console.log("Database Connected!");
    });

module.exports = con;