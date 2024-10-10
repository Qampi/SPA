import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About';
import Userprofile from './Pages/Userprofile';
import Donations from '../src/Pages/Donations';
import Navbar from '../src/Components/Navbar';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Userprofile" element={<Userprofile />} />
        <Route path="/donations" element={<Donations/>} />
    </Routes>
    </Router>

  );
}

export default App;


