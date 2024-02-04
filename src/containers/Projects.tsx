import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHamburger, FaRegListAlt, FaRegMap, FaStickyNote } from "react-icons/fa";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = 'Кейсы';
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="projects-body">
          <h2>Кейсы</h2>
          <ul className='projects-cards'>
            <li><Link className='projects-card' to="/projects/burger"><div className='projects-icon'><FaHamburger /></div> <span>Burger</span></Link></li>
            <li><Link className='projects-card' to="/projects/react-chat"><div className='projects-icon'><FaRegListAlt /></div> <span>React Chat</span></Link></li>
            <li><Link className='projects-card' to="/projects/global-insight"><div className='projects-icon'><FaRegMap /></div> <span>Global Insight</span></Link></li>
            <li><Link className='projects-card' to="/projects/notebook"><div className='projects-icon'><FaStickyNote /></div> <span>Notebook</span></Link></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
