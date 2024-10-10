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
} 

export default App;*/
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Components/Home';
import Userprofile from './Components/Userprofile'; // Use './Userprofile' if it's in the same directory
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/user-profile">User Profile</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/app">App</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user-profile" component={Userprofile} />
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} /> {/* Or another component if needed */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


