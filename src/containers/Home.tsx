import React, { useEffect } from 'react';
import FormModalButton from '../components/FormModalButton/FormModalButton';
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
        <div className="home-body">
          <div className="hero-block">
            <h1>Разработкавеб -сайтов</h1>  
            <p>Создание сайтов в Бишкеке: <br></br>разработка и поддержка под ключ</p>
            <FormModalButton /> 
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
