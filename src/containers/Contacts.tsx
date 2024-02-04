import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Contacts: React.FC = () => {
  useEffect(() => {
    document.title = 'Контакты';
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        контакт
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
