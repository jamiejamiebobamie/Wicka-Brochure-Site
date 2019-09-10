import React from 'react'
import { NavLink } from 'react-router-dom';


function Homepage() {
  return (
    <div className="Homepage">
        <div className="logo_sprite"></div>

        <div className="index_buttons">
            <NavLink className="index_grimoire" to="/grimoire" activeClassName="hurray">Read the Grimoire</NavLink>
            <NavLink className="index_about" to="./about" activeClassName="hurray">About the Game</NavLink>
            <NavLink className="index_download" to="/download" activeClassName="hurray">Download and Play!</NavLink>
        </div>
        <div class="character">
            <div className="candle_sprite_test"/>
            <div className="door_sprite"/>
            <img className="monster_pack" src="/media/imgs/monster_eyes_static.png" width='500' height='80.818' alt="logo" />
            <div className="character_sprite"/>
        </div>
    </div>

  )
}

export default Homepage
