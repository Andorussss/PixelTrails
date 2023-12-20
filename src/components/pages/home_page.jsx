import React, {useEffect, useState} from 'react';
import SimpleSlider from "../slider";
import GameList from "../gameList";
import GamesFilter from "../gamesFilter";
import DB from '../../gamesDB'
const HomePage = () => {
    const initialGames=DB;
    const [filteredGames, setFilteredGames] = useState(initialGames);
    const [filter, setFilter] = useState('Скидки');

    useEffect(() => {
        const newFilteredGames = initialGames.filter((game) => game.category === filter);
        setFilteredGames(newFilteredGames);
    }, [filter]);

    return (
        <div>
            <SimpleSlider games={initialGames} />
            <GamesFilter filter={filter} setFilter={setFilter} />
            <GameList games={filteredGames} />
        </div>
    );
};

export default HomePage;