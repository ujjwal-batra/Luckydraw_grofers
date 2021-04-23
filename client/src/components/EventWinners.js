import React from "react";

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
                    Name: data[i].luckydraw,
                    FirstPlace: data[i].FirstPlace,
                    SecondPlace: data[i].SecondPlace,
                    ThirdPlace: data[i].ThirdPlace
                };
                setEventWinners(prevArray => [...prevArray, x])
            }
          }); // fetching present events
        } catch (err) {
          alert(err); // Failed to fetch
        }
    }, []);

    return (
        <div className="winner-container">
            <div className="winner-heading">
                Winner List 
            </div>
            {eventWinners.slice(0, 7).map((e) => (
                <div className="winner-Card">
                    <div className="winner-card-heading">
                        {e.Name}
                    </div>
                    <hr />
                    <div className="winner-card-list">
                        <div><strong>First Prize:</strong> {e.FirstPlace}</div>
                        <div><strong>Second Prize:</strong> {e.SecondPlace}</div>
                        <div><strong>Third Prize:</strong> {e.ThirdPlace}</div>
                    </div>
                    <div className="blink">
                        &#127881; Congratulations To all the winners &#127881;
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EventWinners;
