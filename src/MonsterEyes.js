import React, {Component} from 'react';


class MonsterEyes extends Component{
    constructor(props){
        super(props)
        this.state = {animation: 'eyesOpened 1s steps(1) infinite alternate-reverse', blinking: false, random: 0}
        this.randomBlink = this.randomBlink.bind(this)
    }

    randomBlink(){
            this.setState({random: Math.random()})
            if (this.state.blinking){
                this.setState( {animation: 'eyesOpened 1s steps(1) infinite alternate-reverse', blinking: false} )
            } else {
                if (this.state.random > .5){
                    this.setState( {animation: 'openEyes 1s steps(30) infinite alternate', blinking: true} )
                }
            }
    }
        // setTimeout(this.randomBlink,2000)

render(){

    return(
        <div className="monster"
             style={{
                 position:'absolute',
                 left:this.props.left,
                 top:this.props.top,
                }}>
            <div className="monster_sprite" style={{
                animation:this.state.animation
            }}></div>
        </div>
    );
}

}

export default MonsterEyes
