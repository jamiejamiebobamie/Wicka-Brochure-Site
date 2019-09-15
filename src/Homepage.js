import React, {Component} from 'react'
import NavBar from './NavBar'
import MonsterEyesContainer from './MonsterEyesContainer'
import data from './monsterEyesLocations'



class Homepage extends Component {
    constructor(props){
        super(props)
        this.state={number:data.length-1}
    }
    render(){
        return (
          <div className="Homepage">
              <NavBar width={this.props.width} />
              <MonsterEyesContainer width={this.props.width} height={this.props.height} />
              <div className="character">
                  <div className="character_sprite"/>
              </div>
          </div>

        )
    }

}

export default Homepage
// <img className="monster_pack" src="/media/imgs/monster_eyes_static.png" width='500' height='80.818' alt="logo" />

// <div className="candle_sprite_test"/>
// <div className="door_sprite"/>
