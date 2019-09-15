import React, {Component} from 'react';
import MonsterEyes from './MonsterEyes'
import data from './monsterEyesLocations'


class MonsterEyesContainer extends Component{

    constructor(props){
        super(props)
        // this.width = this.props.width
        // this.height = this.props.height
        this.coords = []
        let rand = 0

        for (let i = 0; i < 9; i++){
            rand = Math.random()
            if (i%2) {
                console.log('I\'m odd.',rand, i, rand*i+i)
                this.coords.push([i,i/0.3+rand*i*5-15,rand*i*10+i*22])
            } else {
                console.log('I\'m even.',rand, i, -rand*i+i)
                this.coords.push([i,i/0.3-rand*i*5+15,-rand*i*10-i*22])
            }
        }
        // console.log(this.coords)
        this.eyes = this.coords.map( monster =>
            <MonsterEyes left={monster[0][2]+this.props.width} top={monster[0][1]+this.props.height} />
            // <MonsterEyes left={this.coords[0][1]+this.props.width*(1.8/4)} top={this.coords[0][0]+this.props.height*(3.5/6)} />

        )

    }

    render(){
        console.log(data.length)
        return (
            <div>
            <MonsterEyes delay={this.coords[0][0]} left={this.coords[0][2]+this.props.width*(1.92/4)} top={this.coords[0][1]+this.props.height*(3.9/6)} />
            <MonsterEyes delay={this.coords[1][0]} left={this.coords[1][2]+this.props.width*(1.92/4)} top={this.coords[1][1]+this.props.height*(3.9/6)} />
            <MonsterEyes delay={this.coords[2][0]} left={this.coords[2][2]+this.props.width*(1.92/4)} top={this.coords[2][1]+this.props.height*(3.9/6)} />
            <MonsterEyes delay={this.coords[3][0]} left={this.coords[3][2]+this.props.width*(1.92/4)} top={this.coords[3][1]+this.props.height*(3.9/6)} />
            <MonsterEyes delay={this.coords[4][0]} left={this.coords[4][2]+this.props.width*(1.92/4)} top={this.coords[4][1]+this.props.height*(3.9/6)} />
            <MonsterEyes delay={this.coords[5][0]} left={this.coords[5][2]+this.props.width*(1.92/4)} top={this.coords[5][1]+this.props.height*(3.9/6)} />
            <MonsterEyes delay={this.coords[6][0]} left={this.coords[6][2]+this.props.width*(1.92/4)} top={this.coords[6][1]+this.props.height*(3.9/6)} />

            </div>

            )
    }

}



export default MonsterEyesContainer

// <MonsterEyes left={this.coords[7][2]+this.props.width*(1.9/4)} top={this.coords[7][1]+this.props.height*(3.9/6)} />


// <div className="monster"  style={{left:(this.props.width/2.7)+((this.props.width/5)*this.state.random1), top:(this.props.height-400)*this.state.random2+400}} >
//     <div className="monster_sprite"></div>
// </div>

// <div className="monsterEyesContainer">
//     <MonsterEyes left={this.props.width*(1.8/4)} top={this.props.height*(3.5/6)} />
// </div>
