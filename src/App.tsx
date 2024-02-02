import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contacts from './containers/Contacts';
import Portfolio from './containers/Portfolio';
import Project1 from './containers/Project1';
import Project2 from './containers/Project2';
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
       <nav>
        <ul>
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="about-us" className={({ isActive }) => isActive ? 'active-link' : 'link'}>О нас</NavLink>
          </li>
          <li>
            <NavLink to="contacts" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Контакты</NavLink>
          </li>
          <li>
            <NavLink to="portfolio" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Портфолио</NavLink>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/project1" element={<Project1 />} />
          <Route path="/portfolio/project2" element={<Project2 />} />
        </Routes>
    </Router>
  );
}

export default App;
