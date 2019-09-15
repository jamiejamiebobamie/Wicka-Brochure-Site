import React, {Component} from 'react';
import data from './monsterEyesLocations'

class MonsterEyes extends Component{

    constructor(props){
        super(props)
        this.state = { index: Math.floor(props.number*Math.random())}
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
