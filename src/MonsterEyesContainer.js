import React, {Component} from 'react';
import MonsterEyes from './MonsterEyes'

class MonsterEyesContainer extends Component{

    constructor(props){
        super(props)
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


    }

    render(){
        // const monsterEyes = this.coords.map((coords) => <MonsterEyes delay={1} update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={coords[2][2]} top={coords[2][1]-20} />)

        return (
            <div className="MonsterEyesContainer">
                <MonsterEyes delay={1} update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[2][2]} top={this.coords[2][1]-20} />
                <MonsterEyes delay={2} update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[3][2]} top={this.coords[3][1]-20} />
                <MonsterEyes delay={3} update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[4][2]} top={this.coords[4][1]-20} />
                <MonsterEyes delay={4} update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[5][2]} top={this.coords[5][1]-20} />
                <MonsterEyes delay={5} update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[6][2]} top={this.coords[6][1]-20} />
            </div>
            )
    }
}


//

// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[0][2]-15} top={this.coords[0][1]-20} />
// <MonsterEyes update={this.props.update} width={this.props.width} height={this.props.height*(.1/400)} left={this.coords[1][2]} top={this.coords[1][1]-20} />

export default MonsterEyesContainer

// try putting the map method within the render function...
// const monsterEyes =
