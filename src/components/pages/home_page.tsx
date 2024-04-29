import React, { useEffect, useState } from 'react';
import SimpleSlider from "../slider";
import GameList from "../gameList";
import GamesFilter from "../gamesFilter";
import DB from '../../gamesDB';

interface IGame {
    id: number;
    src: string;
    title: string;
    description?:string;
    discount?: string;
    price: string;
    category:string;
}

const HomePage: React.FC = () => {
    const initialGames: IGame[] = DB;
    const [filteredGames, setFilteredGames] = useState<IGame[]>(initialGames);
    const [filter, setFilter] = useState<string>('Скидки');

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
