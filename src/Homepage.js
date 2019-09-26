import React, {Component} from 'react'
import NavBarHomepage from './NavBarHomepage'
import MonsterEyesContainer from './MonsterEyesContainer'
import { Player } from 'video-react';
// import "node_modules/video-react/dist/video-react.css";

class Homepage extends Component {
    constructor(props){
        super(props)
        this.state = { storedState: true, theposition: 0 }

        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    toggleNavbar(state){
        this.setState({storedState: !this.state.storedState})
    }

    render(){
        return (
         <div className="Homepage">
                     <NavBarHomepage
                       dropdownMenu={true}
                       width={this.props.width}
                       liftState={this.toggleNavbar} />
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
        </div>

        )
    }

}




// this.props.height < 960
// && this.state.storedState===true
// && this.props.width < 1400
// || this.props.height < 650 &&


// return (
//  <div className="Homepage" dir="ltr" style={{height: this.props.height*2}}>
//  <div className='snap' style={{top:0}}/>
//          {
//              this.props.thePosition < .2
//          ?
//          <div>
//              <NavBarHomepage
//                dropdownMenu={true}
//                width={this.props.width}
//                liftState={this.toggleNavbar} />
//               <div className="homepage_bottom">
//                   <MonsterEyesContainer
//                       update={this.props.update}
//                       width={this.props.width}
//                       height={this.props.height} />
//                       <div className="character">
//                           <div className="character_sprite"/>
//                           <img
//                               className="character_background_img"
//                               src='/media/imgs/character_background.png'
//                               alt=''/>
//                       </div>
//               </div>
//         </div>
//
//          :
//
//         <div>
//          <div className='snap' style={{top:this.props.height}}/>
//
//          <img
//             className='Player'
//             style={{top:this.props.height, left:0}}
//             src="/media/videos/GameplayClip.mp4"
//             alt="" />
//             </div>
//
//
//          }
// </div>
//
// )


export default Homepage
