var express = require('express');
var fs = require("fs");
var mysql = require('mysql2');
// var csv = require('csv-parser');
var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "luckydrawgame"
});
con.connect(function(err) {
   if (err) 
      console.log(err);
   else
      console.log("Connected To database!");
 });
// let i = 0, j = 1, k = 1;
// fs.createReadStream("../fake_data_event.csv")
// .pipe(csv())
// .on('data', function(data){
//     try {
//        k = j+1;
//       let name = "luckyDraw" + i;
//       let user_query = "INSERT INTO luckydraw_event (Name, StartTime, EndTime, FirstPrize, SecondPrize, ThirdPrize) VALUES ('"+name+"', NOW() + INTERVAL "+j+" DAY, NOW() + INTERVAL "+k+" DAY, '"+data.first+"','"+data.second+"','"+data.third+"');"
//       console.log(user_query);
//       con.query(user_query, (err, res) => {
//          if(err) throw err;
      
//          console.log('Last insert ID:', res.insertId);
//       });
//       i++;
//       j+= 2;
//     }
//     catch(err) {

//     }
// })
// .on('end',function(){
//     //some final operation
// });  

app.get('/present-events', function (req, res) {
   let get_event_query = "SELECT * FROM luckydraw_event WHERE DATEDIFF(EndTime, NOW()) > 0";
   con.query(get_event_query, (err, data) => {
      if(err) throw err;
   
      console.log('Last insert ID:', data);
      res.send(data);
   });
})

app.get('/past-events', function (req, res) {
   let get_event_query = "SELECT * FROM luckydraw_event WHERE DATEDIFF(EndTime, NOW()) <= 0";
   con.query(get_event_query, (err, data) => {
      if(err) throw err;
   
      console.log('Last insert ID:', data);
      res.send(data);
   });
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("APIs listning at http://localhost:3000/")
})