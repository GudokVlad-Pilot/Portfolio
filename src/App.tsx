import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      <Contacts />
    </div>
  );
}

export default App;
