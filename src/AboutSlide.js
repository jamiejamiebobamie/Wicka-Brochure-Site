import React from 'react'
import data from './aboutSlides_data.js'



function AboutSlide(){
    let index = 0
    setTimeout(function(){index+=1;}, 1000);
    // setTimeout(function() {index+=1;}, 3000);
    console.log(index)
    return (
        <div className="about_slides_container">
            <div className="about_slideshow fade">
                <div className="about_mySlides fade">
                    <img className="about_screenshot" src={data[index]} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default AboutSlide
