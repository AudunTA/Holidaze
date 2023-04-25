import { useState } from "react";
import venueApi from "./components/API/venue";
import "./App.css";
import Router from "./Router/Router";
import { useEffect } from "react";
function App() {
  venueApi();

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
