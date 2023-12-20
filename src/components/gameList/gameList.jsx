import React, { Component } from "react";
import Game from "../game";
import './gameList.css'
export default class GameList extends Component {


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.filter !== prevProps.filter) {
            const newFilteredGames = this.props.games.filter((game) => game.category === this.props.filter);
        }
    }

    render() {
        const {games,remove} = this.props;
        if (!games || !games.length) {
            return (
                <div><h1 className={'notFound'}>no games found</h1></div>
            );
        }
        return (
            <div className={'gameList'}>
                {games.map((game, index) => (
                    <Game game={game} remove={remove} key={index} />
                ))}
            </div>
        );
    }
}
