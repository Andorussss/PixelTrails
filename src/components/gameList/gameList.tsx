import React, { Component } from "react";
import Game from "../game";
import './gameList.css';

interface IGame {
    id: number;
    src: string;
    title: string;
    description?:string;
    discount?: string;
    price: string;
    category:string;
}

interface IGameListProps {
    games: IGame[];
    filter?: string;
    remove?: (game: IGame) => void;
}

export default class GameList extends Component<IGameListProps> {
    componentDidUpdate(prevProps: IGameListProps) {
        if (this.props.filter !== prevProps.filter) {
            const newFilteredGames = this.props.games.filter((game) => game.category === this.props.filter);
        }
    }

    render() {
        const { games, remove } = this.props;
        if (!games || !games.length) {
            return (
                <div><h1 className={'notFound'}>No games found</h1></div>
            );
        }
        return (
            <div className={'gameList'}>
                {games.map((game) => (
                    <Game game={game} remove={remove} key={game.id} />
                ))}
            </div>
        );
    }
}
