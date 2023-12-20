import React, {useEffect, useState} from 'react';
import GameList from "../gameList";
import './Page.css'
import GamesFilter from "../gamesFilter";
import DB from "../../gamesDB";
const StrategyGenrePage = () => {
    const initialGames=[DB[10],DB[11],DB[0]]
    const [filteredGames, setFilteredGames] = useState(initialGames);
    const [filter, setFilter] = useState('Скидки');

    useEffect(() => {
        const newFilteredGames = initialGames.filter((game) => game.category === filter);
        setFilteredGames(newFilteredGames);
    }, [filter]);
    return (
        <div className={'page'}>
            <h3 className={'title'}>strategy games</h3>
            <GamesFilter filter={filter} setFilter={setFilter} />
            <GameList games={filteredGames} />
        </div>
    );
};

export default StrategyGenrePage;