import React, {Component} from 'react'
import NavBar from './NavBar'
import AboutSlide from './AboutSlide'
import data from './aboutSlides_data.js'


class About extends Component {

    constructor(props){
        super(props)
        this.state = {
            aboutSlideIndex:0
        }
    }

    render(){
        setTimeout(function(){
            if (this.state.aboutSlideIndex+1 < data.length){
                this.setState({aboutSlideIndex:this.state.aboutSlideIndex+1})
            } else {
                this.setState({aboutSlideIndex:0})
            };}
            .bind(this), 5000);
        return (
          <div className="About">
                <NavBar />

              <h2>About</h2>
              <h4>"Wicka" is a 3rd person action-adventure game made with the Unreal Engine.</h4>

              <AboutSlide aboutSlideIndex={this.state.aboutSlideIndex} />

              <ul>
                  <li>Play as the immortal, wax witch, Wicka.</li>
                  <li>Slay monsters.</li>
                  <li>Collect spell books and gain new abilities.</li>
                  <li>Exit the tomb and find the answers you seek!</li>
              </ul>

              <h4>Who has awoken Wicka and for what purpose?</h4>

          </div>

        )

    }

}

export default About
