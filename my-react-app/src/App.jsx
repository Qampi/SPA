/*import react from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Userprofile from 'Userprofile';
import About from './About';

function App() {
    return (
        <BrowserRouter>
        <di>
            <nav>
                <ul>
                  <li><Link to="/user-profile">Userprofile</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/app">App</Link></li>
                </ul>
            </nav>
            <Switch>
<Route path="/" exact component={Home} />
<Route path="/user-profile" component={Userprofile} />
<Route path="/about" component={About} />
</Switch>
        </di>
        </BrowserRouter>
    );
} export default App;*/


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About';
import Userprofile from '../src/Pages/Userprofile'; // Use './Userprofile' if it's in the same directory
import Donations from '../src/Pages/Donations';
import Navbar from '../src/Components/Navbar';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/user/:username" element={<Userprofile />} />
        <Route path="/donations" element={<Donations/>} />
    </Routes>
    </Router>

  );
}

export default App;


