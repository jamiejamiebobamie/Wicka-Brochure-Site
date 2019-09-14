import React from 'react'
import NavBar from './NavBar'
import MonsterEyes from './MonsterEyes'


function Homepage(props) {
  return (
    <div className="Homepage">
        <NavBar width={props.width} />
        <MonsterEyes width={props.width} height={props.height} />
        <MonsterEyes width={props.width} height={props.height} />
        <MonsterEyes width={props.width} height={props.height} />
        <MonsterEyes width={props.width} height={props.height} />
        <MonsterEyes width={props.width} height={props.height} />

        <MonsterEyes width={props.width} height={props.height} />
        <MonsterEyes width={props.width} height={props.height} />
        <MonsterEyes width={props.width} height={props.height} />
        <MonsterEyes width={props.width} height={props.height} />
        <MonsterEyes width={props.width} height={props.height} />

        <div class="character">
            <div className="character_sprite"/>
        </div>
    </div>

  )
}

export default Homepage
// <img className="monster_pack" src="/media/imgs/monster_eyes_static.png" width='500' height='80.818' alt="logo" />

// <div className="candle_sprite_test"/>
// <div className="door_sprite"/>
