import React from 'react';
import { NavLink } from 'react-router-dom';
import Toolbar from '../Toolbar/Toolbar';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-inner">
                    <NavLink className={'logo'} to="/" end>
                        <img src="../src/assets/logo.svg" alt="Концепция" />
                    </NavLink>
                    <Toolbar />
                </div>
            </div>
        </header>
    );
}

export default Header;
