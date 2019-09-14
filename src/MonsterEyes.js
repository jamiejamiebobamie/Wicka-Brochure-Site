import React, {Component} from 'react';

class MonsterEyes extends Component{

    constructor(props){
        super(props)
        this.state = { left:0, top:0, random1:Math.random(), random2:Math.random()}
    }

    render(){
        return (
            <div className="monster"  style={{left:(this.props.width/2.7)+((this.props.width/5)*this.state.random1), top:(this.props.height-400)*this.state.random2+400}} >
                <div className="monster_sprite"></div>
            </div>
        )
    }

}

export default MonsterEyes
