// var mysql=require("mysql")

// var con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"shivani@123"

// })
// // con.connect(function(err){
// //     if (err) throw err;
// //     console.log("connected")
// //     con.query("CREATE DATABASE javascript",function(err,result){
// //         if (err) throw err;
// //         console.log("created database")
// //     })
// // })


// con.connect(function(err){
//     if(err){
//         console.log("canected")
//     }
//     else{
//         console.log("err")
//     }
// });




// const mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "shivi@123"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE myname", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });





const mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "navgurukul"
});



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE karishma", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

