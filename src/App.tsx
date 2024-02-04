import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contacts from './containers/Contacts';
import Projects from './containers/Projects';
import Project1 from './containers/Project1';
import Project2 from './containers/Project2';
import Project3 from './containers/Project3';
import Project4 from './containers/Project4';
import NotFound from './containers/NotFound';
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/burger" element={<Project1 />} />
          <Route path="/projects/react-chat" element={<Project2 />} />
          <Route path="/projects/global-insight" element={<Project3 />} />
          <Route path="/projects/notebook" element={<Project4 />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
    </Router>
  );
}

export default App;
