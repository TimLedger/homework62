import React, { useEffect } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import Footer from '../components/Footer/Footer';

const Project2: React.FC = () => {
  useEffect(() => {
    document.title = 'Контакт';
  }, []);
  return (
    <div>
      <Toolbar />
      <div className="container">
        
      </div>
      <Footer />
    </div>
  );
}

export default Project2;
