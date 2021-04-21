import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function EventList() {
  const [presentEvents, setPresentEvents] = React.useState([]);
  const [pastEvents, setPastEvents] = React.useState([]);
  const [slicePresentEvents, setSlicePresentEvents] = React.useState(10);
  const [slicePastEvents, setSlicePastEvents] = React.useState(10);

  const onClickShowMorePresent = () => {
    setSlicePresentEvents(slicePresentEvents + 10);
  }

  const onClickShowMorePast = () => {
    setSlicePastEvents(slicePastEvents + 10);
  }

  React.useEffect(() => {
    let link = "http://localhost:3000/present-events"
    try {
      fetch(link)
      .then((results) => results.json())
      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          var x = {
            "ID": data[i].ID,
            "Name": data[i].Name,
            "StartTime": data[i].StartTime,
            "EndTime": data[i].EndTime,
            "FirstPrize": data[i].FirstPrize,
            "SecondPrize": data[i].SecondPrize,
            "ThirdPrize": data[i].ThirdPrize
          };
          setPresentEvents(prevArray => [...prevArray, x])
        }
      }); // fetching present events
      
      link = "http://localhost:3000/past-events"
      fetch(link)
      .then((results) => results.json())
      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          var x = {
            "ID": data[i].ID,
            "Name": data[i].Name,
            "StartTime": data[i].StartTime,
            "EndTime": data[i].EndTime,
            "FirstPrize": data[i].FirstPrize,
            "SecondPrize": data[i].SecondPrize,
            "ThirdPrize": data[i].ThirdPrize
          };
          setPastEvents(prevArray => [...prevArray, x])
        }
      }); // fetching past events
    } catch (err) {
      alert(err); // Failed to fetch
    }
  }, []);

  return (
    <div className="event-block">
      <div>
        Present Lucky-Draw Events
      </div>
      {presentEvents.slice(0, slicePresentEvents).map((e) => (
          <div className="present-event-container">
            <div>
              {e.Name}
            </div>
            <div>
              <span>{e.StartTime}</span>
              <span>{e.EndTime}</span>
            </div>
            <div>
              <span>{e.FirstPrize}</span>
              <span>{e.SecondPrize}</span>
              <span>{e.ThirdPrize}</span>
            </div>
            
          </div>
      ))}
      <div>
        <button onClick={() => onClickShowMorePresent()}>show more</button>
      </div>
      <div>
        Past Lucky-Draw Events
      </div>
      {pastEvents.slice(0, 10).map((e) => (
          <div className="present-event-container">
            <div>
              {e.Name}
            </div>
            <div>
              <span>{e.StartTime}</span>
              <span>{e.EndTime}</span>
            </div>
            <div>
              <span>{e.FirstPrize}</span>
              <span>{e.SecondPrize}</span>
              <span>{e.ThirdPrize}</span>
            </div>
          </div>
      ))}
      <div>
        <button onClick={() => onClickShowMorePast()}>show more</button>
      </div>
    </div>
  );
}

export default EventList;
