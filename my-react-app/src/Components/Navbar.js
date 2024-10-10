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

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/user-profile">User Profile</Link></li>
        <li><Link to="/donations">Donations</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
