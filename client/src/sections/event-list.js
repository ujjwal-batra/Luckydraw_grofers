import React, { useState, useEffect } from "react";

import PresentEventCard from '../components/PresentEventCard'
import PastEventCard from '../components/PastEventCard'
import WinnerSection from '../components/EventWinners'
import Header from '../components/Header'

function EventList() {
  const [presentEvents, setPresentEvents] = React.useState([]);
  const [pastEvents, setPastEvents] = React.useState([]);
  const [slicePresentEvents, setSlicePresentEvents] = React.useState(12);
  const [slicePastEvents, setSlicePastEvents] = React.useState(12);
  
  const onClickShowMorePresent = () => {
    setSlicePresentEvents(slicePresentEvents + 12);
  }

  const onClickShowMorePast = () => {
    setSlicePastEvents(slicePastEvents + 12);
  }

  // to fetch present, upcoming and past events from the database
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
      
      link = "http://localhost:3001/past-events"
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
    <div>
      <Header />  
      <div className="main-container flex-box">
        <div className="event-block">  
          
          <div className="present-event">  
            <div className="event-heading">
              &rarr; Present Lucky-Draw Events
            </div>
            <div className="present-event-container event-container">
              {presentEvents.slice(0, slicePresentEvents).map((e) => (
                  <span className="present-event-card card-container">
                    <PresentEventCard data={e} />
                  </span>
              ))}
            </div>
            <div className="show-more-event">
              <button onClick={() => onClickShowMorePresent()}>show more</button>
            </div>
          </div>
          
          <div classNames="past-event">
            <div className="event-heading past-event-heading">
              &rarr; Past Lucky-Draw Events
            </div>
            <div className="past-event-container event-container">
              {pastEvents.slice(0, slicePastEvents).map((e) => (
                  <div className="past-event-card card-container">
                    <PastEventCard data={e} />
                  </div>
              ))}
            </div>
            <div className="show-more-event">
              <button onClick={() => onClickShowMorePast()}>show more</button>
            </div>
          </div>

        </div>

        <div className="winner-block">
          <WinnerSection />
        </div>
      </div>
    </div>
  );
}

export default EventList;
