import React, { useEffect } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import Footer from '../components/Footer/Footer';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'О нас';
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

export default About;
