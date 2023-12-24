import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/';
import Home from './Pages/Home';



export default function App(){
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<div><Home /></div>}/>
        </Routes>
      </Router>
    </div>
  );
}
