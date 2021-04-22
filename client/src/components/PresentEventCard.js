import React from "react";
import axios from "axios";

function PresentEcentCard(eventData) {
  const [username, setUsername] = React.useState("");

  const onChangeUsername = (e) => {
      setUsername(e.target.value);
      console.log(e.target.value);
  };

  // post request to participate in event
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
          alert(response.data);
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
