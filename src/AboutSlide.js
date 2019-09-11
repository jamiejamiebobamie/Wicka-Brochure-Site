import React from 'react'
import data from './aboutSlides_data.js'



function AboutSlide(props){
    return (
        <div className="about_slides_container">
            <div className="about_slideshow fade">
                <div className="about_mySlides fade">
                    <img className="about_screenshot" src={data[props.aboutSlideIndex]} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default AboutSlide
