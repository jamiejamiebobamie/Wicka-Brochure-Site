import React from 'react'
// import { NavLink } from 'react-router-dom';
import AboutSlide from './AboutSlide'


function About() {
  return (
    <div className="About">

        <a className="back_button"href="/">
            <button className="back_button_img" type="button" name="back" title="Back" alt="logo"></button>
        </a>
        <h2>About</h2>
        <h4>"Wicka" is a 3rd person action-adventure game made with the Unreal Engine.</h4>
        
        <AboutSlide />

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

export default About
