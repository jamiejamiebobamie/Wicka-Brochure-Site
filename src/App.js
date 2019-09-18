import React, {Component} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import Homepage from './Homepage'
import About from './About'
import Grimoire from './Grimoire'
import Download from './Download'

import './App.css';


class App extends Component {

    constructor(props){
        super(props)
        this.state = {width: 0, height: 0}
        //https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

        componentDidMount() {
          this.updateWindowDimensions();
          window.addEventListener('resize', this.updateWindowDimensions);
        }

        componentWillUnmount() {
          window.removeEventListener('resize', this.updateWindowDimensions);
        }

        updateWindowDimensions() {
          this.setState({ width: window.innerWidth, height: window.innerHeight });
        }
    // navbar on all routes is temporary. I need to build a homepage specific navbar.

render(){
    return (
      <Router>
          <div className="App">
              <Route exact path="/"
              render={props => <Homepage update={this.updateWindowDimensions} width={this.state.width} height={this.state.height} />}
               />
              <Route path="/about"
              render={props => <About width={this.state.width} />}
               />
              <Route path="/grimoire"
              render={props => <Grimoire width={this.state.width} />}
               />
               <Route path="/download"
               render={props => <Download width={this.state.width} />}
                />
          </div>
      </Router>
    );
}

}

export default App;
