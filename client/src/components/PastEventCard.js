import React from "react";

function PastEventCard(eventData) {
  return (
    <div className="card-inner-container">
      <div className="card-event-heading">
        {eventData.data.Name}
      </div>
      <div className="card-event-time">
      <span className="card-event-starttime">{eventData.data.StartTime.substring(0, 10)} To </span>
        <span className="card-event-endtime">{eventData.data.EndTime.substring(0, 10)}</span>
      </div>
      <div className="card-event-prize">
        <div>First Prize: {eventData.data.FirstPrize}</div>
        <div>Second Prize: {eventData.data.SecondPrize}</div>
        <div>Third Prize: {eventData.data.ThirdPrize}</div>
      </div>
      <hr />
      
    </div>
  );
}

export default PastEventCard;
