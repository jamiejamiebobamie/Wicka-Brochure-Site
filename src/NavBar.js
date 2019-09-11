import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(){
    return (
        <div className="index_buttons">
          <NavLink className="logo_sprite" to="/" activeClassName="hurray"></NavLink>
          <NavLink className="index_grimoire" to="/grimoire" activeClassName="hurray">Read the Grimoire</NavLink>
          <NavLink className="index_about" to="./about" activeClassName="hurray">About the Game</NavLink>
          <NavLink className="index_download" to="/download" activeClassName="hurray">Download and Play!</NavLink>
        </div>
    )
}

export default NavBar
