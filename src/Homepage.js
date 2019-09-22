import React, {Component} from 'react'
import NavBar from './NavBarHomepage'
import MonsterEyesContainer from './MonsterEyesContainer'

class Homepage extends Component {
    constructor(props){
        super(props)
        this.state = { storedState: true }

        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    toggleNavbar(state){
        this.setState({storedState: !this.state.storedState})
    }

    render(){
        return (
          <div className="Homepage">

              <NavBar
                dropdownMenu={true}
                width={this.props.width}
                liftState={this.toggleNavbar} />

              { this.props.height < 960
                  && this.state.storedState===true
                  && this.props.width < 1400

              ?

              ""

              :

              <div className="homepage_bottom">
              <MonsterEyesContainer
                  update={this.props.update}
                  width={this.props.width}
                  height={this.props.height} />

                  <div className="character">
                      <div className="character_sprite"/>
                      <img
                          className="character_background_img"
                          src='/media/imgs/character_background.png'
                          alt=''/>
                    </div>

              </div>
            }

          </div>

        )
    }

}




export default Homepage
