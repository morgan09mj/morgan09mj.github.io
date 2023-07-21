import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Errornotfound from './Components/404/notfound.jsx'
import LandingPage from './Components/LandingPage/LandingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path='*' element={<Errornotfound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
