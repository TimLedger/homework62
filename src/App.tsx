import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contacts from './containers/Contacts';
import Projects from './containers/Projects';
import Project1 from './containers/Project1';
import Project2 from './containers/Project2';
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
          <Route path="/projects/project1" element={<Project1 />} />
          <Route path="/projects/project2" element={<Project2 />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
    </Router>
  );
}

export default App;
