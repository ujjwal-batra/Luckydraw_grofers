import React from "react";
import { Route } from "react-router-dom";
import './App.css';

import EventPage from './sections/event-list'
import PurchasePage from './sections/purchase-page.js'

function App() {
  return (
    <div className="App">
      <Route path="/events" exact render={(props) => <EventPage />} />
      {/* <Route path="/login" exact render={(props) => <Login />} /> */}
      <Route path="/purchase" exact render={(props) => <PurchasePage />} />
    </div>
  );
}

export default App;
