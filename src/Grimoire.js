import React, {Component} from 'react'
import GrimoirePage from './GrimoirePage'
import data from './grimoirePages_data'
import NavBar from './NavBar'

const book = document.getElementById("book_sprite");


class Grimoire extends Component {

    constructor(props){
        super(props)
        this.state = {pageIndex: 0, backgroundUrl: '/media/sprites/book_rollover_black_background_CROPPED.png', animation:'openBook 3s steps(1) infinite'}
        this.lastPage = data.length
    }

    nextPage(props){
        if (props){
            if (this.state.pageIndex + 1 < this.lastPage) {
                let nextPage = this.state.pageIndex+1
                this.setState({pageIndex: nextPage})
            } else {
                this.setState({pageIndex:0})
            }
            this.setState({animation:'turnPageForward 3s steps(86) forwards'})
            // book.classList.add("animation_forward");
            // book.style.animationIterationCount = "1";
        } else {
            if (this.state.pageIndex - 1 < 0) {
                this.setState({pageIndex:this.lastPage-1})
            } else {
                let lastPage = this.state.pageIndex-1
                this.setState({pageIndex:lastPage})
            }
            this.setState({animation:'turnPageBackward 3s steps(86) forwards'})

            // book.classList.add("animation_backward");
        }
        // Code for Chrome, Safari and Opera
        // book.addEventListener("webkitAnimationEnd", this.removeAnimAddAnim);
        // Standard syntax
        // book.addEventListener("animationend", this.removeAnimAddAnim);
    }

    removeAnimAddAnim(){
        // book.classList.add("animation_open");
        book.classList.remove("animation_backward");
        book.classList.remove("animation_forward");
    }



    render (){
        return (

          <div className="Grimoire">
          <NavBar width={this.props.width}/>

          <div className="grimoire_slideshow-container fade">
                <GrimoirePage pageIndex={this.state.pageIndex}/>
          </div>

          <div class="navbar_sticky_bottom">
                <div className="book">
                    <button
                            className="book_button_back"
                            type="button"
                            name="back"
                            onClick={() => this.nextPage(false)}
                            onAnimationEnd={() => this.setState({animation:'openBook 3s steps(1) infinite'})}
                            webkitAnimationEnd={() => this.setState({animation:'openBook 3s steps(1) infinite'})}>
                    </button>
                    <div
                        className="book_sprite_anim"
                        id="book_sprite"
                        style={{background:`url(${this.state.backgroundUrl}`, animation:this.state.animation}}
                        onAnimationEnd={() => this.setState({animation:'openBook 3s steps(1) infinite'})}
                        webkitAnimationEnd={() => this.setState({animation:'openBook 3s steps(1) infinite'})}>
                    </div>
                    <button className="book_button_forward"
                        type="button"
                        name="forward"
                        onClick={() => this.nextPage(true)}
                        onAnimationEnd={() => this.setState({animation:'openBook 3s steps(1) infinite'})}
                        webkitAnimationEnd={() => this.setState({animation:'openBook 3s steps(1) infinite'})}>
                    </button>
                </div>
          </div>

   </div>


        )
    }
}
//
// background: url('/media/sprites/book_rollover_black_background_CROPPED.png') left center;
// animation: openBook 3s steps(1) infinite;

//  style={{background:url()}}



export default Grimoire


// <a className="back_button"href="/">
//     <button id="back_button_img" type="button" name="back" title="Back" alt="logo"></button>
// </a>


// <br>
//     <div className="book">
//         <button id="book_button_back" type="button" name="back"></button>
//         <div className="book_sprite_anim" id="book_sprite"></div>
//         <button id="book_button_forward" type="button" name="forward"></button>
//     </div>
// </div>

// <div className="innerDIV">
// <div className="grimoire_words">
//     <h2>Wicka</h2>
//     <p>Wicka is an immortal, wax witch who would prefer to be sleeping right now.</p>
// </div>
//
// <div className="grimoire_picture">
//     <img className="test_gif" width='541' height="387"src="media/gifs/whip_wand2.gif" alt=""/>
// </div>
// </div>
// </div>
//
// <div className="mySlides column fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Health and Mana</h2>
// <p>Wicka uses both health and mana to power her spells. Her mana cannot exceed her health, but replinishes over time. Health does not replinish on its own.</p>
// <img className="test_gif_health_bar" width='687' height="30"src="media/gifs/mana_health_bar2.gif" alt=""/>
// </div>
//
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Enchanted Candles</h2>
// <p>Wicka can melt the candles she touches and assimilate them into her body, healing her of any damage she's sustained.</p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='687' height="387"src="media/gifs/telekinesis_brick_riding2.gif" alt=""/>
// </div>
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Wicka's Flame</h2>
// <p>The flame on Wicka's head can be sent out, to illuminate the subject of her attention, locking the camera to that enemy.</p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='687' height="387"src="media/gifs/melt_self1.gif" alt=""/>
// </div>
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Whip Wand</h2>
// <p>Whip Wand turns Wicka's wand into a whip.</p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='687' height="397"src="media/gifs/whip_wand1.gif" alt=""/>
// </div>
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Spellbooks</h2>
// <p>Some monsters drop spellbooks that give Wicka a new ability. There are four spellbooks in all.</p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='687' height="397"src="media/gifs/spell_book_pickups.gif" alt=""/>
// </div>
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Melt Self</h2>
// <p>Turning her body into molten wax, Wicka sinks below the stone floor to evade her enemies.</p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='687' height="387"src="media/gifs/melt_self2.gif" alt=""/>
// </div>
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Freeze Ray</h2>
// <p>Freeze enemies in their tracks, for a time.</p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='687' height="387"src="media/gifs/freeze_ray1.gif" alt=""/>
// </div>
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Telekinesis</h2>
// <p>Wicka can lift the heavy stones from the floor with her magic and toss them at her enemies.</p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='687' height="387"src="media/gifs/telekinesis3.gif" alt=""/>
// </div>
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Telekinesis: Brick-Riding</h2>
// <p>Using Telekinesis, Wicka can lift the stones from the floor and walk on them.</p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='600' height="338"src="media/gifs/telekinesis_brick_riding.gif" alt=""/>
// </div>
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Immolate</h2>
// <p>Turn Wicka's flame into a raging inferno.</p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='687' height="387"src="media/gifs/immolate.gif" alt=""/>
// </div>
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Immolate: Melt Ice</h2>
// <p>Bricks frozen by Freeze Ray cannot be lifted by Telekinesis. Use Immolate to melt the ice.</p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='687' height="387"src="media/gifs/immolate_melt_ice.gif" alt=""/>
// </div>
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Cursed Grimoires</h2>
// <p>Some spellbooks are cursed and attack any who come too close.</p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='687' height="387"src="media/gifs/book1.gif" alt=""/>
// </div>
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Monsters</h2>
// <p>Some say monsters are manifestations of the spellcaster's own demons made real by her magic.</p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='541' height="387"src="media/gifs/telekinesis2.gif" alt=""/>
// </div>
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>Wick Women</h2>
// <p>The process by which Wicka achieved her unlife has been replicated before. Who are these other spellcasters and are they friend or foe?</p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='309.14' height="387"src="media/imgs/wickwoman1.png" alt=""/>
// </div>
// </div>
// </div>
// <div className="mySlides fade">
// <div className="innerDIV">
// <div className="grimoire_words">
// <h2>The Controls</h2>
// <p></p>
// </div>
//
// <div className="grimoire_picture">
// <img className="test_gif" width='618.3' height="442.35"src="media/imgs/wicka_controller_whiteBackground.png" alt=""/>
// </div>
// </div>
// </div>
