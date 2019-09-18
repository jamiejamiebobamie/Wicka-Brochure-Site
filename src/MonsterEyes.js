import React, {Component} from 'react';


class MonsterEyes extends Component{
    constructor(props){
        super(props)
        this.state = {animation: 'openEyes 0s steps(30) reverse', open: false, random: 0}
        // this.randomBlink = this.randomBlink.bind(this)
        this.openEyes = this.openEyes.bind(this)
        this.randomBlink = this.randomBlink.bind(this)

        this.delay = this.props.delay*2000
        console.log(this.props.delay, this.delay)


    }

    componentDidMount() {
      this.props.update();
    }

    randomBlink(){
            this.setState({random: Math.random()})
            // if (this.state.blinking){
                // this.setState( {animation: 'eyesOpened 1s steps(1) infinite alternate-reverse', blinking: false} )
            // } else {
                if (this.state.random > .5){
                    this.setState( {animation: 'openEyes 1.2s steps(30) infinite alternate', blinking: true} )
                    setTimeout( ()=> {this.setState({animation: 'eyesOpened 1s steps(1) infinite alternate-reverse', blinking: false})},2400);
                }
            // }
    }

    openEyes(){
        if (!this.state.open){
            this.setState( {animation: 'openEyes 1.2s steps(30) reverse', open:true} )
            setTimeout( ()=> {this.setState({open:true, animation: 'eyesOpened 1s steps(1) infinite alternate-reverse'})},1200);
    }
}


render() {
    if (!this.state.open){
        setTimeout(this.openEyes,this.delay)
    } else {
        setTimeout(this.randomBlink,this.delay+10000)
    }
    return(
        <div className="monster"
             style={{
                 position:'absolute',
                 left:this.props.width/1.98+this.props.left,
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
