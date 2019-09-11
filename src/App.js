import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom'

import Homepage from './Homepage'
import About from './About'
import Grimoire from './Grimoire'
import Download from './Download'
import NavBar from './NavBar'

import './App.css';


function App() {
  return (
    <Router>
        <div className="App">
        <NavBar />

            <Route path="/" exact component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/grimoire" component={Grimoire} />
            <Route path="/download" component={Download} />
        </div>
    </Router>
  );
}

export default App;
