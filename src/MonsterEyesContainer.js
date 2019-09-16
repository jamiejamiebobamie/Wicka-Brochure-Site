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

        for (let i = 0; i < 16; i++){
            rand = Math.random()
            if (i%2) {
                this.coords.push([i,i/0.3+rand*i*10-15,rand*i*5+i*40-55])
            } else {
                this.coords.push([i,i/0.3-rand*i*10+30,-rand*i*5-i*40+55])
            }
        }
        // console.log(this.coords)
        // this.eyes = data.map( monster =>

            // <MonsterEyes update={this.props.update} left={monster.left+this.props.width} top={monster.top+this.props.height} />
            // <MonsterEyes left={this.coords[0][1]+this.props.width*(1.8/4)} top={this.coords[0][0]+this.props.height*(3.5/6)} />

        // )

    }

    // <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[0][2]-15} top={this.coords[0][1]-20} />


    render(){
        console.log(data.length)
        return (
            <div className="MonsterEyesContainer">
            <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[1][2]} top={this.coords[1][1]-20} />
            <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[2][2]} top={this.coords[2][1]-20} />
            <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[3][2]} top={this.coords[3][1]-20} />
            <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[4][2]} top={this.coords[4][1]-20} />
            <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[5][2]} top={this.coords[5][1]-20} />
            <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[6][2]} top={this.coords[6][1]-20} />

            </div>

            )
    }

}

// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} left={this.coords[7][2]} top={this.coords[7][1]-500} />
//
//
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} left={this.coords[8][2]} top={this.coords[8][1]-500} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} left={this.coords[9][2]} top={this.coords[9][1]-500} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height}  left={this.coords[10][2]} top={this.coords[10][1]-500} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height}  left={this.coords[11][2]} top={this.coords[11][1]-500} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height}  left={this.coords[12][2]} top={this.coords[12][1]-500} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height}  left={this.coords[13][2]} top={this.coords[13][1]-500} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height}  left={this.coords[14][2]} top={this.coords[14][1]-500} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height}  left={this.coords[15][2]} top={this.coords[15][1]-500} />

//
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} left={data[0].left/981} top={data[0].left/606*30} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} left={data[1].left/981} top={data[1].left/606*30} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} left={data[2].left/981} top={data[2].left/606*30} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} left={data[3].left/981} top={data[3].left/606*30} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} left={data[4].left/981} top={data[4].left/606*30} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} left={data[5].left/981} top={data[5].left/606*30} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} left={data[6].left/981} top={data[6].left/606*30} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} left={data[7].left/981} top={data[7].left/606*30} />

// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} delay={this.coords[0][0]} left={this.coords[0][2]} top={this.coords[0][1]} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} delay={this.coords[1][0]} left={this.coords[1][2]} top={this.coords[1][1]} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} delay={this.coords[2][0]} left={this.coords[2][2]} top={this.coords[2][1]} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} delay={this.coords[3][0]} left={this.coords[3][2]} top={this.coords[3][1]} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} delay={this.coords[4][0]} left={this.coords[4][2]} top={this.coords[4][1]} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} delay={this.coords[5][0]} left={this.coords[5][2]} top={this.coords[5][1]} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} delay={this.coords[6][0]} left={this.coords[6][2]} top={this.coords[6][1]} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height} delay={this.coords[7][0]} left={this.coords[7][2]} top={this.coords[7][1]} />



export default MonsterEyesContainer


// <MonsterEyes delay={this.coords[1][0]} left={this.coords[1][2]+this.props.width*(1.92/4)} top={this.coords[1][1]+this.props.height*(3.9/6)} />
// <MonsterEyes delay={this.coords[2][0]} left={this.coords[2][2]+this.props.width*(1.92/4)} top={this.coords[2][1]+this.props.height*(3.9/6)} />
// <MonsterEyes delay={this.coords[3][0]} left={this.coords[3][2]+this.props.width*(1.92/4)} top={this.coords[3][1]+this.props.height*(3.9/6)} />
// <MonsterEyes delay={this.coords[4][0]} left={this.coords[4][2]+this.props.width*(1.92/4)} top={this.coords[4][1]+this.props.height*(3.9/6)} />
// <MonsterEyes delay={this.coords[5][0]} left={this.coords[5][2]+this.props.width*(1.92/4)} top={this.coords[5][1]+this.props.height*(3.9/6)} />
// <MonsterEyes delay={this.coords[6][0]} left={this.coords[6][2]+this.props.width*(1.92/4)} top={this.coords[6][1]+this.props.height*(3.9/6)} />
// <MonsterEyes left={this.coords[7][2]+this.props.width*(1.9/4)} top={this.coords[7][1]+this.props.height*(3.9/6)} />


// <div className="monster"  style={{left:(this.props.width/2.7)+((this.props.width/5)*this.state.random1), top:(this.props.height-400)*this.state.random2+400}} >
//     <div className="monster_sprite"></div>
// </div>

// <div className="monsterEyesContainer">
//     <MonsterEyes left={this.props.width*(1.8/4)} top={this.props.height*(3.5/6)} />
// </div>
