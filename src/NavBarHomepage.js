import React from 'react';
import {NavLink} from 'react-router-dom';
import NavLinks from './NavLinks'

// import DropdownMenu from './Dropdownmenu';

function NavBarHomepage(props){

        return (
            <div className="index_buttons_homepage">
                <NavLink className="logo_sprite" to="/" activeClassName="hurray"></NavLink>
                <div className="homepageLinks">
                    <NavLink className="index_grimoire" to="/grimoire" activeClassName="hurray">Read the Grimoire</NavLink>
                    <NavLink className="index_about" to="/about" activeClassName="hurray">About the Game</NavLink>
                    <NavLink className="index_download" to="/download" activeClassName="hurray">Download and Play!</NavLink>
                </div>
              </div>

    )
}

export default NavBarHomepage
