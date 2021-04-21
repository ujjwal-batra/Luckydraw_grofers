import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function PastEventCard(eventData) {
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
    </div>
  );
}

export default PastEventCard;
