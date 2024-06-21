// src/components/CheckerPage.js
import React, { useState } from 'react';
import './CheckerPage.css';

import veryWeakImage from '../assets/images/very-weak.png';
import weakImage from '../assets/images/weak.png';
import mediumImage from '../assets/images/medium.png';
import strongImage from '../assets/images/strong.png';
import veryStrongImage from '../assets/images/very-strong.png';

const CheckerPage = () => {
  const [password, setPassword] = useState('');
  const [complexity, setComplexity] = useState('None');

  const checkPassword = (pwd) => {
    let score = 0;
    if (pwd.length > 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    switch (score) {
      case 5:
        return 'Very Strong';
      case 4:
        return 'Strong';
      case 3:
        return 'Medium';
      case 2:
        return 'Weak';
      default:
        return 'Very Weak';
    }
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setComplexity(checkPassword(pwd));
  };

  const getImage = (complexity) => {
    switch (complexity) {
      case 'Very Strong':
        return veryStrongImage;
      case 'Strong':
        return strongImage;
      case 'Medium':
        return mediumImage;
      case 'Weak':
        return weakImage;
      case 'Very Weak':
      default:
        return veryWeakImage;
    }
  };

  return (
    <div>
      <h2 className='checker-h2' >Password Complexity Checker</h2>
      <input type="password" value={password} onChange={handleChange} placeholder="Enter your password" />
      <p className='checker-p'>Complexity: {complexity}</p>
      {complexity && <img className='complexity-image' src={getImage(complexity)} alt={complexity} />}
    </div>
  );
};

export default CheckerPage;
