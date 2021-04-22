import React from "react";
import { Route } from "react-router-dom";

function EventWinners() {
    const [eventWinners, setEventWinners] = React.useState([]);

    React.useEffect(() => {
        let link = "http://localhost:3000/eventWinners"
        try {
          fetch(link)
          .then((results) => results.json())
          .then((data) => {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
              var x = {
                
              };
              setEventWinners(prevArray => [...prevArray, x])
            }
          }); // fetching present events
        } catch (err) {
          alert(err); // Failed to fetch
        }
    }, []);

    return (
        <div className="">
      
        </div>
    );
}

export default EventWinners;
