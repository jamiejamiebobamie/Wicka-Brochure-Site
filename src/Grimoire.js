import React, {Component} from 'react'
import GrimoirePage from './GrimoirePage'
import data from './grimoirePages_data'
import NavBar from './NavBar'

class Grimoire extends Component {

    constructor(props){
        super(props)
        this.state = {
            pageIndex: 0,
            backgroundUrl: '/media/sprites/book_rollover_black_background_CROPPED.png',
            animation:'openBook 3s steps(1) infinite'}
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
        } else {
            if (this.state.pageIndex - 1 < 0) {
                this.setState({pageIndex:this.lastPage-1})
            } else {
                let lastPage = this.state.pageIndex-1
                this.setState({pageIndex:lastPage})
            }
            this.setState({animation:'turnPageBackward 3s steps(86) forwards'})
        }
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
                                onAnimationEnd={ () =>
                                    this.setState( {
                                        animation:'openBook 3s steps(1) infinite'})
                                    }
                                webkitAnimationEnd={ () =>
                                    this.setState( {
                                        animation:'openBook 3s steps(1) infinite'})
                                    }>
                        </button>

                        <div className='book'>
                        <div
                            className="book_sprite_anim"
                            id="book_sprite"
                            style={ {
                                background:`url(${this.state.backgroundUrl}`,
                                animation:this.state.animation } }
                            onAnimationEnd={ () =>
                                this.setState( {
                                    animation:'openBook 3s steps(1) infinite'})
                                }
                            webkitAnimationEnd={ () =>
                                this.setState( {
                                    animation:'openBook 3s steps(1) infinite'})
                                }>
                        </div>
                            <img
                                className="book_background_img"
                                src='/media/imgs/book_background.png'
                                alt=''/>
                        </div>

                        <button className="book_button_forward"
                            type="button"
                            name="forward"
                            onClick={ () =>
                                this.nextPage(true)}
                            onAnimationEnd={ () =>
                                this.setState( {
                                    animation:'openBook 3s steps(1) infinite'})
                                }
                            webkitAnimationEnd={ () =>
                                this.setState( {
                                    animation:'openBook 3s steps(1) infinite'})
                                }>
                        </button>
                    </div>
              </div>
       </div>


        )
    }
}

export default Grimoire
