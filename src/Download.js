import React from 'react'
import NavBar from './NavBar'

// import { NavLink } from 'react-router-dom';


function Download(props){

    return (
      <div className="Download">
      <NavBar dropdownMenu={false} width={props.width}/>
        <a className="downloadLink" href="https://drive.google.com/file/d/1gMgRZOwGviJM7Ea-v2l9q56bQqEx7PrX/view?usp=sharing">
            <p className="downloadP">Click to Download</p>
        </a>
          <div className="downloadInstructions">
              <p className="downloadWords">This game is not finished and no longer in development. Follow the link to my Google drive and click the download button in the top right corner.</p>
              <img className="downloadImage" src="/media/imgs/download_instructions/1.png" width="1000" height="625" alt="logo"/>
              <p className="downloadWords">To play the game, you will need a Mac operating system and an Xbox controller with a USB connector. Once downloaded, the game must be authorized by your Mac to open it.</p>
              <img className="downloadImage" src="/media/imgs/download_instructions/4.png" width="1000" height="625" alt="logo"/>
              <p className="downloadWords">Navigate to 'System Preferences' and to the 'Security and Privacy' tab. At the bottom click 'Open Anyway' and then launch the application to play.</p>
              <img className="downloadImage" src="/media/imgs/download_instructions/5.png" width="1000" height="625" alt="logo"/>
              <img className="downloadImage" src="/media/imgs/download_instructions/6.png" width="1000" height="625" alt="logo"/>
              <img className="downloadImage" src="/media/imgs/download_instructions/8.png" width="1000" height="625" alt="logo"/>
              <p className="downloadWords">If you have any questions or comments, please contact me at jmccrory@vt.edu! I hope you enjoy playing the game!</p>
          </div>
      </div>

    )


}

export default Download




// <a class="back_button"href="/">
//     <button id="back_button_img" type="button" name="back" title="Back" alt="logo"></button>
// </a>
