var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shivani@123",
  database:"mydb"
});

// con.connect(function(err) {
//   if (err);
//   console.log("Connected!");
// });



// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//       if (err){
//       console.log("Database not created");
//       }else{
//           console.log("Database created")
//       }
      
//     });
//   });




// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });




// var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
// con.query(sql, function (err, result) {
//     if (err){
//     console.log("0 record inserted");
//     }else{
//         console.log("1 record inserted")
//     }
// });

