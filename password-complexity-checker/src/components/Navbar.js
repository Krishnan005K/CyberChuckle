// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/checker">Password Checker</Link></li>
        <li><Link to="/details">Details</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
