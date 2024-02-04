import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'О нас';
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        о нас 
      </div>
      <Footer />
    </div>
  );
}

export default About;
