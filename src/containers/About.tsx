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
        <div className="about-body">
          <h2>О нас</h2>
          <p className='about-text'>Наша веб-студия - это творческая команда профессионалов, объединенных общей страстью к веб-разработке и дизайну. Мы стремимся создавать уникальные и инновационные веб-решения, которые отражают вашу уникальность и помогают достичь ваших целей. Мы гордимся нашим опытом, креативным подходом и постоянным стремлением к совершенству. Доверьте нам свой проект, и мы превратим вашу идею в виртуальную реальность, отражающую вашу уникальность и миссию.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
