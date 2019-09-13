import React from 'react';
import {NavLink} from 'react-router-dom';

function NavLinks(props){
    return(
          <div>
        {props.toggled ? (
            <div>
            <NavLink className="index_grimoire" to="/grimoire" activeClassName="hurray">Read the Grimoire</NavLink>
            <NavLink className="index_about" to="/about" activeClassName="hurray">About the Game</NavLink>
            <NavLink className="index_download" to="/download" activeClassName="hurray">Download and Play!</NavLink>
            <button className="toggleDropdownMenu"
                    onClick={ () => props.toggleMenuFunction() }>
            <img width="100" src="media/imgs/dropDownMenu_Button_img_UP.png" alt="" />
            </button>
            </div>
        ) :
                <button className="toggleDropdownMenu"
                        onClick={ () => props.toggleMenuFunction() }>
                <img width="100" src="media/imgs/dropDownMenu_Button_img_DOWN.png" alt="" />
                </button>}
        </div>

    )
}


export default NavLinks
