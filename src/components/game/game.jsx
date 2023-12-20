import React, { Component } from "react";
import {Link} from "react-router-dom";
import './game.css'
export default class Game extends Component {
    render() {
        const {game,remove} = this.props;

        return (
            <div className={'game'} >
                <Link to={`/game/${game.id}`} className="game-box">
                    <div className={'title_block'}>
                        <img src={game.src} alt=""/>
                        <h4 className={'title'}>{game.title}</h4>
                    </div>
                    <div className={ 'price-block'}>
                        {game.discount?<p className={'discount'}>{game.discount}</p>:<p></p>}
                        <p className={'price'}>{game.price}</p>
                    </div>

                </Link>
                {remove?<button  className={'removeBtn'} onClick={()=>remove(game)}>Remove</button>:''}
            </div>
        );
    }
}

