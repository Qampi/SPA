/*import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/user/">UserProfile</Link>
            <Link to="/donation/">Donations</Link>
            <Link to="/app/">App</Link>
        </nav>
    );
}

export default Navbar;*/
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <header className="Navbar"><nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/Userprofile">User Profile</Link></li>
      <li><Link to="/donations">Donations</Link></li>
    </ul>
  </nav></header>
  );
}

export default Navbar;
