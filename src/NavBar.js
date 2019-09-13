import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import NavLinks from './NavLinks'

// import DropdownMenu from './Dropdownmenu';

class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {dropdownMenu: false, width: 0, height: 0}
        this.toggleMenu = this.toggleMenu.bind(this)
        //https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    toggleMenu(){
        this.setState({dropdownMenu: !this.state.dropdownMenu})
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

    render(){
        return (
            (this.state.width>1400) ?

            ( <div className="index_buttons">
                <NavLink className="logo_sprite" to="/" activeClassName="hurray"></NavLink>
                <NavLink className="index_grimoire" to="/grimoire" activeClassName="hurray">Read the Grimoire</NavLink>
                <NavLink className="index_about" to="/about" activeClassName="hurray">About the Game</NavLink>
                <NavLink className="index_download" to="/download" activeClassName="hurray">Download and Play!</NavLink>
              </div> )

                :

            ( <div className="index_buttons">
                <NavLink className="logo_sprite" to="/" activeClassName="hurray"></NavLink>
                <NavLinks toggled={this.state.dropdownMenu} toggleMenuFunction={this.toggleMenu} />
              </div>
          )

    )
}
}

export default NavBar
