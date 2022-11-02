import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Navigating from "./screens/Navigating";
import SwipeUp from "./screens/SwipeUp";
import Home from "./screens/Home";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/Navigating/" exact component={Navigating} />
      <Route path="/SwipeUp/" exact component={SwipeUp} />
      <Route path="/Home/" exact component={Home} />
    </Router>
  );
}

export default App;
