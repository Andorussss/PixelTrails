import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = (props) => {
    const [showCatalogDropdown, setShowCatalogDropdown] = useState(false);
    const handleCatalogMouseEnter = () => {
        setShowCatalogDropdown((prevState)=>!prevState);
    };

    const handleCatalogMouseLeave = () => {
        setShowCatalogDropdown(false);
    };

    return (
        <header className="header">
            <h3>
                <Link to="/">Pixel Trails</Link>
            </h3>
            <ul>
                <li onClick={handleCatalogMouseEnter} onMouseLeave={handleCatalogMouseLeave}>
                    <p className={'catalog'}>Product Catalog</p>
                    {showCatalogDropdown && (
                        <ul className="catalog-dropdown">
                            <Link to={'/action-genre'}>
                                <li>
                                    Action
                                </li>
                            </Link>
                            <Link to={'/adventure-genre'}>
                                <li>
                                    Adventure
                                </li>
                            </Link>
                            <Link to={'/sport-genre'}>
                                <li>
                                    Sport
                                </li>
                            </Link>
                            <Link to={'/strategy-genre'}>
                                <li>
                                    Strategy
                                </li>
                            </Link>
                            <Link to={'/race-genre'}>
                                <li>
                                    race
                                </li>
                            </Link>
                            <Link to={'/simulator-genre'}>
                                <li>
                                   simulators
                                </li>
                            </Link>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/basket">my basket</Link>
                </li>
                <li>
                    <Link to={"/about-us"}>About us</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
