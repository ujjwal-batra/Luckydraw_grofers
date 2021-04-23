var express = require('express');
var mysql = require('mysql2');
var cron = require('node-cron');
var async = require('async');
var cors = require('cors');

// app inialization
var app = express();
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// allowing CORS
app.use(cors())

// making connection to the database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "checkdatabase4"
});
// checking connection to the database
con.connect(function(err) {
   if (err) 
      console.log(err);
   else
      console.log("Connected To database!");
});

// winner declaraion every 1 minute can be changed to different timing
cron.schedule('0 * * * * *', function() {
   // query for all the ended events
   var winner_query = "SELECT * FROM luckydraw_event WHERE TIMEDIFF( EndTime, NOW()) <= 0"
   con.query(winner_query, (err, data) => {
      if(err) throw err;

      async.each(data, function (row, callback) {
         var eventId = row.ID
         // query or all the tickets used for a particular event
         var find_tickets_query = "SELECT * FROM tickets WHERE EventId = '"+eventId+"' and IsUsed = 1"
         con.query(find_tickets_query, (err, rows) => {
            if(err) throw err;
         
            if(rows.length <= 3){
               console.log("Lack of participation No winner");
            }
            else{
               // choosing the winner
               var user_ids = [];
               for(let j=0; j<rows.length; j++){
                  user_ids.push(rows[j].UserID)
               }
               var shuffled = user_ids.sort(function(){return .5 - Math.random()});
               var selected=shuffled.slice(0,3);

               // updating the results if not announced
               var is_announced = "SELECT * FROM luckydraw_winners WHERE ID = '"+eventId+"'";
               con.query(is_announced, (err, rowPresent) => {
                  if(rowPresent.length == 0){
                     var winner_update_query = "INSERT INTO luckydraw_winners (ID, Winner, SecondPlace, ThirdPlace) VALUES ('"+eventId+"', '"+selected[0]+"', '"+selected[1]+"', '"+selected[2]+"');";
                     con.query(winner_update_query, (err, rowAdded) => {
                        if(err) throw err;
                     
                        console.log('Winners declared');
                     });
                  }
                  else 
                     console.log("Already Announced")
               });
            }
            
         });
      })
   });
});

// present event or upcoming event API
app.get('/present-events', function (req, res) {
   let get_event_query = "SELECT * FROM luckydraw_event WHERE TIMEDIFF( EndTime, NOW()) > 0";
   con.query(get_event_query, (err, data) => {
      if(err) throw err;
      
      res.send(data);
   });
})

// past event API
app.get('/past-events', function (req, res) {
   let get_event_query = "SELECT * FROM luckydraw_event WHERE TIMEDIFF( EndTime, NOW()) <= 0";
   con.query(get_event_query, (err, data) => {
      if(err) throw err;
   
      res.send(data);
   });
})

// Raffle ticket providing API
app.post('/purchase', function (req, res) {
   var timestamp = Date.now()
   var user_id;
   let user_query = "SELECT * FROM users WHERE Name = '" +  Object.keys(req.body)[0] + "';";

   // query for selecting user
   con.query(user_query, (err, data) => {
      if(err) throw err;

      if(data.length == 0 )
         res.send("no user found")
      else{
         user_id = data[0].ID;
         // query for generating a ticket and inserting it in database
         let ticket_query = "INSERT INTO tickets (TicketID, UserID, IsUsed, EventId) VALUES ('"+timestamp+"', '"+user_id+"', '0', '0');";
         con.query(ticket_query, (err, data) => {
            if(err){ 
               res.send("Failed to generate a ticket");
            };
            res.send("Generated a raffle ticket for you.");
         });
      }
   });
})

// Participate in a luckydraw API 
app.post('/participate', function (req, res) {
   var x = Object.keys(req.body)[0];
   var y = JSON.parse(x);

   let user_query = "SELECT * FROM users WHERE Name = '" +  y.Name + "';";
   con.query(user_query, (err, data) => {
      if(err) throw err;

      if(data.length == 0)
         res.send("no user found")
      else{
         user_id = data[0].ID;

         // selecting tickets applicable and checking for user applied or not
         let ticket_query = "SELECT * FROM tickets WHERE UserID = '"+user_id+"' and IsUsed = 0";
         let already_participated_query = "SELECT * FROM tickets WHERE EventId = '"+y.eventID+"' and IsUsed = 1 and userID = '"+user_id+"'";
         
         con.query(already_participated_query, (err, isPresent) => {
            if(err) throw err;
            
            if(isPresent.length > 0)
               res.send("Already Participated");
            else{
               con.query(ticket_query, (err, rows) => {
                  if(err) throw err;
                  
                  if(rows.length == 0)
                     res.send("noTicket")
                  else{
                     var ticket_id = rows[0].TicketID
                     var update_query = "UPDATE tickets SET IsUsed = 1, EventId = '"+y.eventID+"' WHERE TicketID = '"+ticket_id+"'";
                     con.query(update_query, (err, data) => {
                        if(err) throw err;
               
                        res.send("Participated Successfully");
                     });
                  }
               });
            }
         });
      }
   });
})

// Winner declaring API
app.get('/eventWinners', function (req, res) {
   
   let get_event_query = "SELECT * FROM luckydraw_winners";
   con.query(get_event_query,  (err, data) => {
      let response = [];
      if(err) throw err;

      // querying over all the winners of all the completed events
      for(let i=0; i<data.length; i++){
         var eventID = data[i].ID
         var event_query = "SELECT * FROM luckydraw_event WHERE ID = '"+eventID+"'";
          con.query(event_query,  (err, row) => {
            if(err) throw err;
            
            var users_query1 = "SELECT * FROM users WHERE ID = '"+data[i].Winner+"' OR ID = '"+data[i].SecondPlace+"' OR ID = '"+data[i].ThirdPlace+"'";
            con.query(users_query1, (err, userRow) => {
               if(err) throw err;
   
               var winner, SecondPlace, ThirdPlace;
               if(userRow[0].ID == data[i].Winner)
                  winner = userRow[0].Name
               else if(userRow[1].ID == data[i].Winner)
                  winner = userRow[1].Name
               else if(userRow[2].ID == data[i].Winner)
                  winner = userRow[2].Name
                  
               if(userRow[0].ID == data[i].SecondPlace)
                  SecondPlace = userRow[0].Name
               else if(userRow[1].ID == data[i].SecondPlace)
                  SecondPlace = userRow[1].Name
               else if(userRow[2].ID == data[i].SecondPlace)
                  SecondPlace = userRow[2].Name
               
               if(userRow[0].ID == data[i].ThirdPlace)
                  ThirdPlace = userRow[0].Name
               else if(userRow[1].ID == data[i].ThirdPlace)
                  ThirdPlace = userRow[1].Name
               else if(userRow[2].ID == data[i].ThirdPlace)
                  ThirdPlace = userRow[2].Name

               var sending_data = {
                  "luckydraw": row[0].Name,
                  "FirstPlace": winner,
                  "SecondPlace": SecondPlace,
                  "ThirdPlace": ThirdPlace
               }
               response[i] = sending_data;
               if(i == data.length - 1){
                  res.send(response);
               }
            });
            
         });
      }
   });
})

// establishing backend server
var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("APIs listning at http://localhost:3000/")
})