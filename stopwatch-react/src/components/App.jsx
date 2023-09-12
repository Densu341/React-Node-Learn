import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./common/header/Header";
import Stopwatch from "./stopwatch/Stopwatch";
import Timer from "./timer/Timer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Stopwatch />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
