import logo from './logo.svg';
import squatImage from './Images/Squat.jpg'
import benchImage from './Images/Bench.jpg'
import deadliftImage from './Images/Deadlift.jpg'
import DeadliftStep1 from './Images/Deadlift/DeadliftStep1.png'
import './App.css';
import React, {useState} from "react";
import Programs from './pages/Programs'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import Exercises from "./pages/Exercises"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/program">Programs</Link>
          <Link to="/exercises">Exercises</Link>
          <Link to="/about">AboutMe</Link>
        </nav>
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;