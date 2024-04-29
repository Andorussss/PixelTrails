import React, { useEffect, useState } from 'react';
import GameList from "../gameList";
import './Page.css';
import GamesFilter from "../gamesFilter";
import DB from "../../gamesDB";

interface IGame {
    id: number;
    src: string;
    title: string;
    description?:string;
    discount?: string;
    price: string;
    category:string;
}

const SimulatorGenrePage: React.FC = () => {
    const initialGames: IGame[] = [DB[8], DB[5], DB[7]];
    const [filteredGames, setFilteredGames] = useState<IGame[]>(initialGames);
    const [filter, setFilter] = useState<string>('Скидки');

    useEffect(() => {
        const newFilteredGames = initialGames.filter((game) => game.category === filter);
        setFilteredGames(newFilteredGames);
    }, [filter]);

    return (
        <div className={'page'}>
            <h3 className={'title'}>Simulation Games</h3>
            <GamesFilter filter={filter} setFilter={setFilter} />
            <GameList games={filteredGames} />
        </div>
    );
};

export default SimulatorGenrePage;
