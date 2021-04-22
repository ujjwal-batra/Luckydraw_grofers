import React from "react";

function PastEventCard(eventData) {
  return (
    <div className="card-inner-container">
      <div className="card-event-heading">
        {eventData.data.Name}
      </div>
      <hr />
      <div className="card-event-time">
        <div className="card-event-starttime">Start: {eventData.data.StartTime.substring(0, 10)}</div>
        <div className="card-event-endtime">End:{eventData.data.EndTime.substring(0, 10)}</div>
      </div>
      <hr />
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
