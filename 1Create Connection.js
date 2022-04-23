var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shivi@123",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});




// create connection only run on visualation