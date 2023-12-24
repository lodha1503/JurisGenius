import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/';
import Home from './Pages/Home';
import Appointment from './Pages/Appointment/'


export default function App(){
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<div><Home /></div>}/>
          <Route path="/Appointment" element={<div><Appointment/></div>}/>
        </Routes>
      </Router>
    </div>
  );
}
