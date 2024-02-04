import React from 'react';
import { NavLink } from 'react-router-dom';
import './Toolbar.css';

const Toolbar: React.FC = () => {
    return (
        <nav className='main-nav'>
            <ul>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : 'link'}>О нас</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Контакты</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Кейсы</NavLink>
                </li>
            </ul>                        
        </nav>
    );
}

export default Toolbar;
