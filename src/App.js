import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import SkillsPage from './pages/SkillsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/about" components={AboutPage} />
        <Route path="/projects" components={ProjectsPage} />
        <Route path="/skills" components={SkillsPage} />
        <Route path="/resume" components={ResumePage} />
        <Route path="/contact" components={ContactPage} />
      </Routes>
    </Router>
    
  );
}

export default App;
