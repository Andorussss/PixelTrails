import React, {Component} from 'react';
import './basket.css'
import GameList from "../gameList";


export  default class Basket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games:[]
        };
    }
    componentDidMount() {
        this.setState({games:JSON.parse(localStorage.getItem('basket'))})
    }
    componentWillUnmount() {
        this.setState({games:[]})
    }

    remove=(game)=>{
        this.setState({games:this.state.games.filter(g=>g.id!==game.id)})
        const BasketGames=JSON.parse(localStorage.getItem('basket'));
        const updatedBasket = BasketGames.filter(g => g.id !== game.id);
        localStorage.setItem('basket',JSON.stringify(updatedBasket))
    }
    buy=()=>{
        this.setState({games:[]})
        localStorage.setItem('basket',JSON.stringify([]))
        alert('Thank you for your purchase')
    }
    render() {
        const games=this.state.games;
        const totalPrice = games?games.reduce((acc, game) => {
            const price = parseFloat(game.price.replace('$', ''));
            return acc + price;
        }, 0):0;
        return (
            <div className={'basket'}>
                <h2 className="title">Basket</h2>
                <div className={'basket-box'}>
                    <GameList games={games} remove={this.remove} />
                    {totalPrice>0?<div className={'price-box'}>
                        <h4 className={'totalPrice'}>Total price:{totalPrice.toFixed(2)} $</h4>
                        <button onClick={this.buy} className={'buyBtn'}>Buy</button>
                    </div>:''}
                </div>

            </div>
        );
    }
}


