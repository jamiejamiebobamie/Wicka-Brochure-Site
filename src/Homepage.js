import React, {Component} from 'react'
import NavBar from './NavBarHomepage'
import MonsterEyesContainer from './MonsterEyesContainer'

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
        console.log(this.props.height < 960,
            this.state.storedState===true,
            this.props.width < 1400,
            this.props.height < 650,
            this.props.thePosition > .5)
        return (
         <div className="Homepage" dir="ltr" style={{height: this.props.height*2}}>
          <div className="container">
            <div className='snap'><h1>1</h1></div>
            <div className='snap'><h1>2</h1></div>
            <div className='snap'><h1>3</h1></div>
            <div className='snap'><h1>4</h1></div>
            <div className='snap'><h1>5</h1></div>
          </div>
        </div>

        )
    }

}
//



export default Homepage


// <NavBar
//   dropdownMenu={true}
//   width={this.props.width}
//   liftState={this.toggleNavbar} />
//
// {
//     // this.props.height < 960
//     // && this.state.storedState===true
//     // && this.props.width < 1400
//     // || this.props.height < 650 &&
//     this.props.thePosition > .5
//
// ?
//
// ""
//
// :
//
// <div className="homepage_bottom">
// <MonsterEyesContainer
//     update={this.props.update}
//     width={this.props.width}
//     height={this.props.height} />
//
//     <div className="character">
//         <div className="character_sprite"/>
//         <img
//             className="character_background_img"
//             src='/media/imgs/character_background.png'
//             alt=''/>
//       </div>
//
// </div>
// }
