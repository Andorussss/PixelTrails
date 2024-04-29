import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
    const [showCatalogDropdown, setShowCatalogDropdown] = useState<boolean>(false);

    const handleCatalogMouseEnter = (): void => {
        setShowCatalogDropdown((prevState) => !prevState);
    };

    const handleCatalogMouseLeave = (): void => {
        setShowCatalogDropdown(false);
    };

    return (
        <header className="header">
            <h3>
                <Link to="/">Pixel Trails</Link>
            </h3>
            <ul>
                <li onMouseEnter={handleCatalogMouseEnter} onMouseLeave={handleCatalogMouseLeave}>
                    <p className={'catalog'}>Product Catalog</p>
                    {showCatalogDropdown && (
                        <ul className="catalog-dropdown">
                            <Link to={'/action-genre'}>
                                <li>Action</li>
                            </Link>
                            <Link to={'/adventure-genre'}>
                                <li>Adventure</li>
                            </Link>
                            <Link to={'/sport-genre'}>
                                <li>Sport</li>
                            </Link>
                            <Link to={'/strategy-genre'}>
                                <li>Strategy</li>
                            </Link>
                            <Link to={'/race-genre'}>
                                <li>Race</li>
                            </Link>
                            <Link to={'/simulator-genre'}>
                                <li>Simulators</li>
                            </Link>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/basket">My Basket</Link>
                </li>
                <li>
                    <Link to={"/about-us"}>About Us</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
