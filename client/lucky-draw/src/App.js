import React from "react";
import { Route } from "react-router-dom";
import './App.css';

import EventPage from './sections/event-list'

function App() {
  return (
    <div className="App">
      <Route path="/events" exact render={(props) => <EventPage />} />
      
    </div>
  );
}

export default App;
