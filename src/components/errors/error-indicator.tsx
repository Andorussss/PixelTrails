import React from 'react';
import './error-indicator.css';
import gameIcon from './game-error.png';

const GameErrorIndicator: React.FC = () => {
    return (
        <div className="game-error-indicator">
            <img src={gameIcon} alt="game error icon" />
            <span className="gameOver">GAME OVER!</span>
            <span>
                Oops! Something went wrong in the gaming realm.
            </span>
            <span>
                Our team of wizards is working on a fix.
            </span>
        </div>
    );
}

export default GameErrorIndicator;
