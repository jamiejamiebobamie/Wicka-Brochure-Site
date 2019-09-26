import React, {Component} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import Homepage from './Homepage'
import About from './About'
import Grimoire from './Grimoire'
import Download from './Download'

import './App_backup.css';


class App extends Component {

    constructor(props){
        super(props)
        this.state = {width: 0, height: 0, thePosition:0}
        //https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
      window.addEventListener('scroll', this.listenToScroll)

    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
      window.removeEventListener('scroll', this.listenToScroll)

    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

// https://stackoverflow.com/questions/53158796/get-scroll-position-with-reactjs
listenToScroll = () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  const scrolled = winScroll / height

  this.setState({
    thePosition: scrolled,
  })
}

    render(){
        return (
          <Router>
              <div className="App">
                  <Route exact path="/"
                    render={ props =>
                        <Homepage
                            update={this.updateWindowDimensions}
                            width={this.state.width}
                            height={this.state.height}
                            thePosition={this.state.thePosition} />
                    }
                   />
                  <Route path="/about"
                    render={ props =>
                        <About width={this.state.width} />
                    }
                   />
                  <Route path="/grimoire"
                    render={ props =>
                        <Grimoire width={this.state.width} />
                    }
                   />
                   <Route path="/download"
                    render={ props =>
                        <Download width={this.state.width} />
                    }
                    />
              </div>
          </Router>
        );
    }

}

export default App;
