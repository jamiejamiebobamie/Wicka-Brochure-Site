import React, {Component} from 'react';
import MonsterEyes from './MonsterEyes'
import data from './monsterEyesLocations'


class MonsterEyesContainer extends Component{

    constructor(props){
        super(props)
        // this.width = this.props.width
        // this.height = this.props.height
        this.eyes = data.map( monster =>
            <MonsterEyes left={monster.left} top={monster.top} />
        )
    }

    render(){
        return (
            <div className="monsterEyesContainer">
                {this.eyes}
            </div>
            )
    }

}

export default MonsterEyesContainer


// <div className="monster"  style={{left:(this.props.width/2.7)+((this.props.width/5)*this.state.random1), top:(this.props.height-400)*this.state.random2+400}} >
//     <div className="monster_sprite"></div>
// </div>
