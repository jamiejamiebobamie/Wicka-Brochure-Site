import React, {Component} from 'react'
import NavBar from './NavBar'
import MonsterEyesContainer from './MonsterEyesContainer'
import data from './monsterEyesLocations'



class Homepage extends Component {
    constructor(props){
        super(props)
        this.state={number:data.length-1, storedState: true}
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    toggleNavbar(state){
        this.setState({storedState: !this.state.storedState})
        console.log(this.storedState)
    }

    render(){
        console.log(this.props.height < 960, this.state.dropdownMenu==true, this.props.width < 1400)
        return (
          <div className="Homepage">
              <NavBar dropdownMenu={true} width={this.props.width} liftState={this.toggleNavbar} />
              {this.props.height < 960 && this.state.storedState==true && this.props.width < 1400

              ?
              
              ""

              :

              <div className="character">
                  <MonsterEyesContainer update={this.props.update} width={this.props.width} height={this.props.height} />
                  <div className="character_sprite"/>
              </div>


          }

          </div>

        )
    }

}

export default Homepage
// <img className="monster_pack" src="/media/imgs/monster_eyes_static.png" width='500' height='80.818' alt="logo" />

// <div className="candle_sprite_test"/>
// <div className="door_sprite"/>
