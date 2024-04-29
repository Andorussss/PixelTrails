import React, { useEffect, useState } from 'react';
import GameList from "../gameList";
import './Page.css';
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

const AdventureGenrePage: React.FC = () => {
    const initialGames: IGame[] = [DB[9], DB[0], DB[1], DB[10], DB[11]];

    const [filteredGames, setFilteredGames] = useState<IGame[]>(initialGames);
    const [filter, setFilter] = useState<string>('Скидки');

    useEffect(() => {
        const newFilteredGames = initialGames.filter((game) => game.category === filter);
        setFilteredGames(newFilteredGames);
    }, [filter]);

    return (
        <div className={'page'}>
            <h3 className={'title'}>Adventure Games</h3>
            <GamesFilter filter={filter} setFilter={setFilter} />
            <GameList games={filteredGames} />
        </div>
    );
};

export default AdventureGenrePage;
