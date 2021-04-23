import React from "react";
import axios from "axios";
import ReactStars from 'react-stars'

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
          url: "http://localhost:3001/participate",
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
      <div className="card-event-time">
        <span className="card-event-starttime">{eventData.data.StartTime.substring(0, 10)} To </span>
        <span className="card-event-endtime">{eventData.data.EndTime.substring(0, 10)}</span>
      </div>
      <hr />
      <div className="card-event-prize">
        <div><span>First Prize: {eventData.data.FirstPrize}</span> <span className="stars"><ReactStars count={1} value={1} size={24} color2={'#ffd700'} color1={'#ffd700'} /></span></div>
        <div><span>Second Prize: {eventData.data.SecondPrize}</span> <span className="stars"><ReactStars count={1} value={1} size={24} color2={'#C0C0C0'} color1={'#C0C0C0'} /></span></div>
        <div><span>Third Prize: {eventData.data.ThirdPrize}</span> <span className="stars"><ReactStars count={1} value={1} size={24} color2={'#CD7F32'} color1={'#CD7F32'} /></span></div>
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
        <button className="card-event-button" onClick={() => onClickParticipate(eventData.data.ID)}>&rarr;</button>
      </div>
    </div>
  );
}

export default PresentEcentCard;
