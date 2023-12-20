import React, {useEffect, useState} from 'react';
import './Page.css';
import initialGames from '../../gamesDB'
const GamePage = () => {
    const urlParts = window.location.href.split('/');
    const id = parseInt(urlParts[urlParts.length - 1]);
    const [game,setGame]=useState({})
    useEffect(()=>{
        setGame(initialGames[id]);
    })
    const addInBasket=()=>{
       const BasketGames=JSON.parse(localStorage.getItem('basket'));
       if(BasketGames.find((element)=>{return element.id===game.id}))
       {
           alert('This game is already in your cart')
       }
       else{
           BasketGames.push(game);
           localStorage.setItem('basket',JSON.stringify(BasketGames))
           alert('This game has been added to cart')
       }
    }
    const backgroundImageStyle = {
        backgroundImage: `url(${game.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className={'game-page'} style={backgroundImageStyle}>
            <div className={'game-container'}>
                <h1 className={'m-auto'}>{game.title}</h1>
                <div>
                    <div className={'d-flex justify-content-between'}>
                        <div className={'img-box'}>
                            <img className={'game-img'} src={game.src} alt=""/>
                        </div>

                        <div className={'button-box'}>
                            <h1 className={'mb-3'}>{game.price}</h1>
                            <div className={'d-flex'}>
                                {game.discount?<div className={'discount-box'}>{game.discount}</div>:''}
                                <button className="addBtn" onClick={addInBasket}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'description-box'}>
                    <h3>Description:</h3>
                    <p>{game.description}</p>
                </div>
            </div>
        </div>
    );
};

export default GamePage;