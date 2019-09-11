import React from 'react'
import NavBar from './NavBar'


function Homepage() {
  return (
    <div className="Homepage">
        <NavBar />
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
