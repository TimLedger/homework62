import React from 'react';
import { NavLink } from 'react-router-dom';
import './Toolbar.css';

const Toolbar: React.FC = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-inner">
                    <NavLink className={'logo'} to="/" end>
                        <img src="../src/assets/logo.svg" alt="Концепция" />
                    </NavLink>
                    <nav className='main-nav'>
                        <ul className='main-nav'>
                            <li>
                                <NavLink to="about" className={({ isActive }) => isActive ? 'active-link' : 'link'}>О нас</NavLink>
                            </li>
                            <li>
                                <NavLink to="contacts" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Контакты</NavLink>
                            </li>
                            <li>
                                <NavLink to="projects" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Кейсы</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
      );
}

export default Toolbar;