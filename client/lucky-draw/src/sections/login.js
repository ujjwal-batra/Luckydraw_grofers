import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function EventList() {

  React.useEffect(() => {
    let link = ""
    try {
      fetch(link)
      .then((results) => results.json())
      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          
        }
      }); // fetching present events

    } catch (err) {
      alert(err); // Failed to fetch
    }
  }, []);

  return (
    <div className="input">
      
    </div>
  );
}

export default EventList;
