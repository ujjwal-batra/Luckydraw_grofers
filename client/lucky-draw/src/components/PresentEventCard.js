import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function PresentEcentCard(eventData) {
  const [username, setUsername] = React.useState("");

  const onChangeUsername = (e) => {
      setUsername(e.target.value);
      console.log(e.target.value);
  };

  const onClickParticipate = (e) => {
      const details = {
        Name : username,
        eventID : e
      }
      console.log(details)
      axios({
          method: "POST",
          url: "http://localhost:3000/participate",
          headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          data: JSON.stringify(details)
        }).then((response) => {
          console.log(response)
          if (response.data === "sent") {
            alert("Participated in the LuckyDraw ID : " + e);
          } else if (response.data === "noTicket") {
            alert("Failed to participate");
          }
      });
  }

  return (
    <div className="card-inner-container">
      <div className="card-event-heading">
        {eventData.data.Name}
      </div>
      <hr />
      <div className="card-event-time">
        <div className="card-event-starttime">Start: {eventData.data.StartTime.substring(0, 10)}</div>
        <div className="card-event-endtime">End: {eventData.data.EndTime.substring(0, 10)}</div>
      </div>
      <hr />
      <div className="card-event-prize">
        <div>First Prize: {eventData.data.FirstPrize}</div>
        <div>Second Prize: {eventData.data.SecondPrize}</div>
        <div>Third Prize: {eventData.data.ThirdPrize}</div>
      </div>
      <hr />
      <div className="card-event-participate">
        <input
          className=""
          type="text"
          name="username"
          placeholder="Username..."
          onChange={onChangeUsername}
        />
        <button className="card-event-button" onClick={() => onClickParticipate(eventData.data.ID)}>Participate</button>
      </div>
    </div>
  );
}

export default PresentEcentCard;
