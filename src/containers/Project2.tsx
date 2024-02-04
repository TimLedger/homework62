import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import Header from '../components/Header/Header';
import Chat from '../components/Project2/Project2';
import Footer from '../components/Footer/Footer';

const Project2: React.FC = () => {
  useEffect(() => {
    document.title = 'React Chat';
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
          <li className='breadcrumb-slash'><span>React Chat</span></li>
        </ul>
        <Chat />
      </div>
      <Footer />
    </div>
  );
}

export default Project2;
