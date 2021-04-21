const { time } = require('console');
var express = require('express');
var fs = require("fs");
var mysql = require('mysql2');

// app inialization
var app = express();
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// making connection to the database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "luckydrawgame"
});
// checking connection to the database
con.connect(function(err) {
   if (err) 
      console.log(err);
   else
      console.log("Connected To database!");
});

// present event or upcoming event API
app.get('/present-events', function (req, res) {
   let get_event_query = "SELECT * FROM luckydraw_event WHERE DATEDIFF(EndTime, NOW()) > 0";
   con.query(get_event_query, (err, data) => {
      if(err) throw err;
   
      console.log('Last insert ID:', data);
      res.send(data);
   });
})

// past event API
app.get('/past-events', function (req, res) {
   let get_event_query = "SELECT * FROM luckydraw_event WHERE DATEDIFF(EndTime, NOW()) <= 0";
   con.query(get_event_query, (err, data) => {
      if(err) throw err;
   
      console.log('Last insert ID:', data);
      res.send(data);
   });
})

// Raffle ticket providing API
app.post('/purchase', function (req, res) {
   console.log(Object.keys(req.body)[0]);
   var timestamp = Date.now()
   var user_id;
   let user_query = "SELECT * FROM users WHERE Name = '" +  Object.keys(req.body)[0] + "';";

   con.query(user_query, (err, data) => {
      if(err) throw err;
      user_id = data[0].ID;
      console.log(timestamp)
      console.log( data[0].ID);
      let ticket_query = "INSERT INTO tickets (TicketID, UserID, IsUsed, EventId) VALUES ('"+timestamp+"', '"+user_id+"', '0', '0');";
      con.query(ticket_query, (err, data) => {
         if(err) throw err;
      
         console.log('Last insert ID:', data);
         res.send("sent");
      });
   });
})

// Participate in a luckydraw API 
app.post('/participate', function (req, res) {
   var x = Object.keys(req.body)[0];
   var y = JSON.parse(x);
   console.log(y);

   let user_query = "SELECT * FROM users WHERE Name = '" +  y.Name + "';";
   con.query(user_query, (err, data) => {
      if(err) throw err;

      user_id = data[0].ID;
      console.log(user_id)
      let ticket_query = "SELECT * FROM tickets WHERE UserID = '"+user_id+"' and IsUsed = 0";
      con.query(ticket_query, (err, rows) => {
         if(err) throw err;
         
         if(rows.length == 0)
            res.send("noTicket")
         else{
            var ticket_id = rows[0].TicketID
            var update_query = "UPDATE tickets SET IsUsed = 1, EventId = '"+y.eventID+"' WHERE TicketID = '"+ticket_id+"'";
            con.query(update_query, (err, data) => {
               if(err) throw err;
            
               console.log('Last insert ID:', data);
               res.send("sent");
            });
         }
      });
   });
})


// establishing backend server
var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("APIs listning at http://localhost:3000/")
})