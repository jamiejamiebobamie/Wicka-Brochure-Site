import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import Homepage from './Homepage'
import About from './About'
import Grimoire from './Grimoire'
import Download from './Download'

import './App.css';


function App() {
    // navbar on all routes is temporary. I need to build a homepage specific navbar.
  return (
    <Router>
        <div className="App">
            <Route path="/" exact component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/grimoire" component={Grimoire} />
            <Route path="/download" component={Download} />
        </div>
    </Router>
  );
}

export default App;
