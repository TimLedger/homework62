import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import Header from '../components/Header/Header';
import Notebook from '../components/Project4/Project4';
import Footer from '../components/Footer/Footer';

const Project3: React.FC = () => {
  useEffect(() => {
    document.title = 'Notebook';
  }, []);

  const location = useLocation();
  const path = location.pathname;
  const parts = path.split('/');
  parts.shift();

  return (
    <div>
      <Header />
      <div className="container">
        <ul className='breadcrumb'>
          <li className='breadcrumb-slash'><Link className='breadcrumb-link' to="/" ><FaHome /></Link></li>
          <li className='breadcrumb-slash'><Link className='breadcrumb-link' to="/projects">Кейсы</Link></li>
          <li className='breadcrumb-slash'><span>Notebook</span></li>
        </ul>
        <Notebook />
      </div>
      <Footer />
    </div>
  );
}

export default Project3;
