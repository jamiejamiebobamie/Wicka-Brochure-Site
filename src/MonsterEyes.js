import React, {Component} from 'react';


class MonsterEyes extends Component{
    constructor(props){
        super(props)
        this.state = {animation: 'openEyes 0s steps(30) reverse', open: false, random: 0, blinking:false}

        this.openEyes = this.openEyes.bind(this)
        this.randomBlink = this.randomBlink.bind(this)

        this.delay = this.props.delay*2000


    }

    componentDidMount() {
      this.props.update();
    }

    randomBlink(){
        if (Math.random() > .5 && this.state.blinking === false){
            this.setState( {animation: 'openEyes 1.2s steps(30) infinite alternate', blinking: true} )
            setTimeout( ()=> {this.setState({animation: 'eyesOpened 1s steps(1) infinite alternate-reverse', blinking: false})},2400);
        }
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
        setTimeout(this.randomBlink,10000+this.delay/2)
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
