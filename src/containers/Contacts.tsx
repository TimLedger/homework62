import React, { useEffect } from 'react';
import { FaMailBulk, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
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
        <div className="contacts-body">
          <h2>Контакты</h2>
          <p className='contacts-text'>Свяжитесь с нами, чтобы превратить вашу идею в цифровую реальность! Мы всегда на связи, готовые обсудить ваши проекты, предложить инновационные решения и помочь воплотить ваши самые смелые идеи. Не стесняйтесь писать нам или звонить - ваш успех - наша страсть!</p>
          <ul className='contacts-cards'>
            <li className='contacts-card'>
              <div className='contacts-icon'><FaMailBulk /></div> 
              <h4>Email</h4>
              <p>concept@gmail.com <br></br> concept@yandex.ru</p>
            </li>
            <li className='contacts-card'>
              <div className='contacts-icon'><FaPhoneAlt /></div> 
              <h4>Номер</h4>
              <p>+7 (996) 799-98-87 <br></br>+7 (996) 799-98-87</p>
            </li>
            <li className='contacts-card'>
              <div className='contacts-icon'><FaMapMarkerAlt /></div> 
              <h4>Адрес</h4>
              <p> ул. Красноармейская, д. 123, офис 456, г. Новый Город, Страна</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
