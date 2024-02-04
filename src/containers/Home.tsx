import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Концепция';
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        г стр
      </div>
      <Footer />
    </div>
  );
}

export default Home;
