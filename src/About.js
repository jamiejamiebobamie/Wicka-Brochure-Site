import React, {Component} from 'react'
import NavBar from './NavBar'
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
            <NavBar
                dropdownMenu={false}
                width={this.props.width}
                liftState={this.toggleNavbar} />

                <div className="firstLineAbout">
                    <div className="aboutWords">
                      <h5
                        className="downloadWordsRed">
                        "Wicka" is a 3rd person action-adventure game,
                        made with the Unreal Engine.
                      </h5>
                    </div>
                    <img className="about_screenshot" src={data[0]} alt=""/>
                </div>

                <div className="aboutWordsAndSlide">
                    <img className="about_screenshot" src={data[4]} alt=""/>
                    <ul className="aboutWords">
                        <li
                            className="downloadWordsWhite">
                            Play as the immortal, wax witch, Wicka.
                        </li>
                        <li
                            className="downloadWordsWhite">Slay monsters.
                        </li>
                    </ul>
                </div>

                <div className="aboutWordsAndSlide">
                    <ul className="aboutWords">
                            <li
                                className="downloadWordsWhite">
                                Collect spell books and gain new abilities.
                            </li>
                            <li
                                className="downloadWordsWhite">
                                Exit the tomb and find the answers you seek!
                            </li>
                    </ul>
                    <img className="about_screenshot" src={data[1]} alt=""/>
                </div>

              <h5
                className="finalLineAbout">
                Who has awoken Wicka and for what purpose?
              </h5>
          </div>

        )

    }

}

export default About
