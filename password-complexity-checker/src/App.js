// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CheckerPage from './components/CheckerPage';
import DetailPage from './components/DetailPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checker" element={<CheckerPage />} />
        <Route path="/details" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
