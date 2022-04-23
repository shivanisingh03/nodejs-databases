var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shivi@123",
});

con.query("DROP DATABASE mysql", function (err, result) {
  if (err){
  console.log("Database not created");
  }else{
    console.log("Database created")
  }
})



// drop databases databasename

