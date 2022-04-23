var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "shivi@123",
  // database:"shivani"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE nav", function (err, result) {
    if (err){
    console.log("Database not created");
    }else{
      console.log("Database created")
    }
  });
});



// show databases;


// use databasename;