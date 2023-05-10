import { useState } from "react";
import "./App.css";
import Router from "./Router/Router";
import { useEffect } from "react";
import { MarginApp } from "./styles/Layout.styled";
function App() {
  return (
    <MarginApp>
      <Router />
    </MarginApp>
  );
}

export default App;
