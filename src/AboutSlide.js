import React from 'react'
import data from './aboutSlides_data.js'



function AboutSlide(props){
    return (
        <div className="about_slides_container">
                    <img className="about_screenshot" src={data[props.aboutSlideIndex]} alt=""/>
        </div>
    )
}

export default AboutSlide
