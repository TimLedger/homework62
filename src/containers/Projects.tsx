import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '../components/Toolbar/Toolbar';

const Projects: React.FC = () => {
  return (
    <div>
      <Toolbar />
      <ul>
        <li><Link to="/projects/project1">Project 1</Link></li>
        <li><Link to="/projects/project2">Project 2</Link></li>
      </ul>
    </div>
  );
}

export default Projects;
