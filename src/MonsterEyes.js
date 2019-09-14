import React, {Component} from 'react';

class MonsterEyes extends Component{

    constructor(props){
        super(props)
        this.state = {number: 0}
    }

    addMonsters(){
        if (this.state.number < 20){

        }
    }

    render(){

        return (
            <div className="monster" style={{left:0, top:this.props.height-500}} >
                <div className="monster_sprite"></div>
                <h3>{this.props.width}</h3>
            </div>
        )
    }

}

export default MonsterEyes
