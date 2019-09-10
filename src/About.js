import React from 'react'
// import { NavLink } from 'react-router-dom';


function About() {
  return (
    <div classNameName="About">

        <a className="back_button"href="/">
            <button className="back_button_img" type="button" name="back" title="Back" alt="logo"></button>
        </a>
        <h2>About</h2>
        <h4>"Wicka" is a 3rd person action-adventure game made with the Unreal Engine.</h4>

        <div className="about_slides_container">
                <div className="about_slideshow fade">
                    <div className="about_mySlides fade">
                        <img className="about_screenshot" src="/media/imgs/_wicka1.png" alt=""/>
                    </div>
                    <div className="about_mySlides fade">
                        <img className="about_screenshot" src="media/imgs/_freeze_ray1.png" alt=""/>
                    </div>
                    <div className="about_mySlides fade">
                        <img className="about_screenshot" src="/media/imgs/_freeze_ray5.png" alt=""/>
                    </div>
                    <div className="about_mySlides fade">
                        <img className="about_screenshot" src="/media/imgs/_immolate1.png" alt=""/>
                    </div>
                    <div className="about_mySlides fade">
                        <img className="about_screenshot" src="/media/imgs/_freeze_ray4.png" alt=""/>
                    </div>
                    <div className="about_mySlides fade">
                        <img className="about_screenshot" src="/media/imgs/_telekinesis1.png" alt=""/>
                    </div>
                    <div className="about_mySlides fade">
                        <img className="about_screenshot" src="/media/imgs/_wicka2.png" alt=""/>
                    </div>
                    <div className="about_mySlides fade">
                        <img className="about_screenshot" src="/media/imgs/_wicka3.png" alt=""/>
                    </div>
                </div>
        </div>

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
