import React, { useEffect } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Концепция';
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

export default Home;
