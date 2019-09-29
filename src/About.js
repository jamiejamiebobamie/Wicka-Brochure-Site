import React, {Component} from 'react'
import NavBar from './NavBar'

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
                <div className="aboutContent">

                    { this.props.width > 1400
                        ?
                        <div>
                        <div className="firstLineAbout">
                            <div className="aboutWords left">
                              <h5
                                className="downloadWordsRed">
                                "Wicka" is a 3rd person action-adventure game,
                                made with the Unreal Engine.
                              </h5>
                            </div>
                            <img className="about_screenshot" src="/media/imgs/_wicka3.png" alt=""/>
                        </div>
                        <div className="aboutWordsAndSlide">
                            <img className="about_screenshot" src="/media/imgs/_freeze_ray5.png" alt=""/>
                            <ul className="aboutWords right">
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
                            <ul className="aboutWords left">
                                    <li
                                        className="downloadWordsWhite">
                                        Collect spellbooks and gain new abilities.
                                    </li>
                                    <li
                                        className="downloadWordsWhite">
                                        Exit the tomb and find the answers you seek!
                                    </li>
                            </ul>
                            <img className="about_screenshot" src="/media/imgs/_immolate1.png" alt=""/>
                        </div>
                        </div>

                        :

                        <div>

                        <div className="firstLineAbout">
                        <img className="about_screenshot" src="/media/imgs/_wicka3.png" alt=""/>
                            <div className="aboutWords center">
                              <h5
                                className="downloadWordsRed">
                                "Wicka" is a 3rd person action-adventure game,
                                made with the Unreal Engine.
                              </h5>
                            </div>
                        </div>

                        <div className="aboutWordsAndSlide">
                            <img className="about_screenshot" src="/media/imgs/_freeze_ray5.png" alt=""/>
                            <ul className="aboutWords">
                                <li
                                    className="downloadWordsWhite">
                                    Play as the immortal, wax witch, Wicka.
                                </li>
                                <li
                                    className="downloadWordsWhite">Slay monsters.
                                </li>
                                <li
                                    className="downloadWordsWhite">
                                    Collect spellbooks and gain new abilities.
                                </li>
                                <li
                                    className="downloadWordsWhite">
                                    Exit the tomb and find the answers you seek!
                                </li>
                            </ul>
                            <img className="about_screenshot" src="/media/imgs/_immolate1.png" alt=""/>
                        </div>
                        </div>

                    }
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
