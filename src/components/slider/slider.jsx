import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './slider.css'
import {Link} from "react-router-dom";
export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
        };
    }


    componentDidMount() {
        this.setState({games:this.props.games})
    }
    render() {
        const games=this.state.games
        return (
            <div className={'slider'}>
                <Carousel className={'slider-box'} >
                    {games && games.map((game) => (
                        <Carousel.Item key={game.id}>
                            <Link to={`/game/${game.id}`}>
                                <img src={game.src} alt={game.title} />
                                <Carousel.Caption className={'caption'}>
                                    <h3 className={'title'}>{game.title}</h3>
                                    <div className={'price_box'}>
                                        <h4 className={'price'}>{game.price}</h4>
                                    </div>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>


        );

    }
}