// src/components/HomePage.js
import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Password Complexity Checker</h1>
      <Link to="/checker">
        <button className="button">Password Complexity Checker</button>
      </Link>
    </div>
  );
};

export default HomePage;
