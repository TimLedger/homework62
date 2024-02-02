import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <div>
      <ul>
        <li><Link to="/portfolio/project1">Project 1</Link></li>
        <li><Link to="/portfolio/project2">Project 2</Link></li>
      </ul>
    </div>
  );
}

export default Portfolio;
