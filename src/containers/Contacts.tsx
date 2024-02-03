import React, { useEffect } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import Footer from '../components/Footer/Footer';

const Contacts: React.FC = () => {
  useEffect(() => {
    document.title = 'Контакты';
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

export default Contacts;
