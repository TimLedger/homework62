import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <ul>
          <li><Link to="/projects/project1">Project 1</Link></li>
          <li><Link to="/projects/project2">Project 2</Link></li>
          <li><Link to="/projects/project3">Project 3</Link></li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
