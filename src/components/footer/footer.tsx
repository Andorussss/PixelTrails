import React from 'react';
import { Link } from "react-router-dom";
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <p>
                © 2023 Pixel Trails
            </p>
            <ul>
                <li>
                    <Link to={"/about-us"}>About us</Link>
                </li>
                <li>
                    <Link to={"/privacy-policy"}>Privacy Policy</Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
