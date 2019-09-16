import React, {Component} from 'react';


class MonsterEyes extends Component{
    constructor(props){
        super(props)
        this.state = {animation: 'openEyes 1s steps(30) reverse', open: false, random: 0}
        // this.randomBlink = this.randomBlink.bind(this)
        this.openEyes = this.openEyes.bind(this)
        console.log(this.props.delay)
        this.delay = Math.random()*10

    }

    componentDidMount() {
      this.props.update();
    }

    // randomBlink(){
    //         this.setState({random: Math.random()})
    //         if (this.state.blinking){
    //             this.setState( {animation: 'eyesOpened 1s steps(1) infinite alternate-reverse', blinking: false} )
    //         } else {
    //             if (this.state.random > .5){
    //                 this.setState( {animation: 'openEyes 1s steps(30) infinite alternate', blinking: true} )
    //             }
    //         }
    // }

    openEyes(){
        if (!this.state.open){
            // setTimeout( () => {this.setState({animation: 'openEyes 1s steps(30) reverse', open: true}) }, 1000)
            this.setState( {animation: 'openEyes 1s steps(30) reverse', open: true} )
        //     // this.setState( {animation: 'eyesOpened 1s steps(1) infinite alternate-reverse', blinking: false} )
        } else {
            this.setState( {animation: 'eyesOpened 1s steps(1) infinite alternate-reverse'} )
            // this.setState( {animation: 'openEyes 1s steps(30) infinite alternate', blinking: true} )
    }
}


render() {
    setTimeout(this.openEyes,1000)
    // setTimeout(this.openEyes,this.delay)
    return(
        <div className="monster"
             style={{
                 position:'absolute',
                 left:this.props.width/2+this.props.left,
                 top:this.props.height/2+this.props.top,
                }}>
            <div className="monster_sprite" style={{
                animation:this.state.animation
            }}></div>
        </div>
    );
}

}

export default MonsterEyes
