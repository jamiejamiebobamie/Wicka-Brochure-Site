import React from 'react';
// import logo from './logo.svg';

import { HashRouter as Router, Route } from 'react-router-dom'

import './App.css';

import Homepage from './Homepage'
import About from './About'
import Grimoire from './Grimoire'
import Download from './Download'


function App() {
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
