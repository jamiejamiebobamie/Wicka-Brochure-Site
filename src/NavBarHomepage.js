import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import NavLinks from './NavLinks'

class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {dropdownMenu: this.props.dropdownMenu}
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu(){
        this.setState({dropdownMenu: !this.state.dropdownMenu})
        this.props.liftState()
    }


    render(){
        return (
            (this.props.width>1400) ?

            ( <div className="index_buttons">
                <NavLink
                    className="logo_sprite"
                    to="/" activeClassName="hurray">
                </NavLink>
                <NavLink
                    className="index_grimoire"
                    to="/grimoire" activeClassName="hurray">
                    Read the Grimoire
                </NavLink>
                <NavLink
                    className="index_about"
                    to="/about" activeClassName="hurray">
                    About the Game
                </NavLink>
                <NavLink
                    className="index_download"
                    to="/download" activeClassName="hurray">
                    Download and Play!
                </NavLink>
              </div>
            ) : (
                <div className="index_buttons">
                <NavLink
                    className="logo_sprite"
                    to="/"
                    activeClassName="hurray">
                </NavLink>
                <NavLinks
                    toggled={this.state.dropdownMenu}
                    toggleMenuFunction={this.toggleMenu} />
              </div>
            )

    )
}
}

export default NavBar
