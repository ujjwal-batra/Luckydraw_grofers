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
    <div className="">
      <div>
        {eventData.data.Name}
      </div>
      <div>
        <span>{eventData.data.StartTime}</span>
        <span>{eventData.data.EndTime}</span>
      </div>
      <div>
        <span>{eventData.data.FirstPrize}</span>
        <span>{eventData.data.SecondPrize}</span>
        <span>{eventData.data.ThirdPrize}</span>
      </div>
      <div>
        <input
          className=""
          type="text"
          name="username"
          placeholder="Username..."
          onChange={onChangeUsername}
        />
        <button onClick={() => onClickParticipate(eventData.data.ID)}>Participate</button>
      </div>
    </div>
  );
}

export default PresentEcentCard;
