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
        return (
          <div className="About">
            <NavBar dropdownMenu={true} width={this.props.width} liftState={this.toggleNavbar} />

                <div className="aboutWordsAndSlide">
                    <div className="aboutWords">
                      <h4>"Wicka" is an unfinished 3rd person action-adventure game.</h4>
                      <h4>Made with the Unreal Engine.</h4>
                    </div>
                    <div className="about_slides_container">
                        <img className="about_screenshot" src={data[0]} alt=""/>
                    </div>
                </div>

                <div className="aboutWordsAndSlide">
                    <div className="about_slides_container">
                            <img className="about_screenshot" src={data[4]} alt=""/>
                    </div>
                    <div className="aboutWords">
                        <ul className="bulletPoints">
                            <li>Play as the immortal, wax witch, Wicka.</li>
                            <li>Slay monsters.</li>
                        </ul>
                    </div>
                </div>

                <div className="aboutWordsAndSlide">
                    <div className="aboutWords">
                        <ul className="bulletPoints">
                            <li>Collect spell books and gain new abilities.</li>
                            <li>Exit the tomb and find the answers you seek!</li>
                        </ul>
                    </div>
                    <div className="about_slides_container">
                            <img className="about_screenshot" src={data[1]} alt=""/>
                    </div>
                </div>

              <h4 className="finalLineAbout">Who has awoken Wicka and for what purpose?</h4>
          </div>

        )

    }

}

export default About
