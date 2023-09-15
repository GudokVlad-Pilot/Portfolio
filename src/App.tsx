import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Contacts from './components/Contacts';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import HobbiesPage from './pages/HobbiesPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column"
    }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/experience' element={<ExperiencePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/hobbies' element={<HobbiesPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Contacts />
    </div>
  );
}

export default App;
