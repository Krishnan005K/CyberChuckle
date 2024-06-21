// src/components/DetailPage.js
import React from 'react';
import './DetailPage.css';

const DetailPage = () => {
  return (
    <div className="detail-container">
      <h2>Details About a Good Password</h2>
      <div className="detail-content">
        <h3>What is a Strong Password?</h3>
        <p>
          A strong password is designed to be difficult for a person or program to guess. The purpose of a password is to ensure that only authorized users can access resources, so a password that is easy to guess poses a significant cybersecurity risk.
        </p>
        <p>
          Often, when creating login credentials, people create memorable but weak passwords by choosing names, phone numbers, birthdays, or even the word "password" itself. For many years, "password" was the most commonly used password, and now that many password policies require the inclusion of a numeral, the most common password has become "password1."
        </p>
        <p>
          To effectively prevent data breaches, identity theft, and other unauthorized access to private information, it is crucial to create complex and long passwords.
        </p>

        <h3>Preventing Identity Theft</h3>
        <p>
          A strong password is a key component in preventing identity theft.
        </p>

        <h3>Characteristics of a Strong Password</h3>
        <ul>
          <li>Sufficient Length: Aim for at least 12 characters.</li>
          <li>Mix of Characters: Include special characters, numbers, and both uppercase and lowercase letters.</li>
        </ul>

        <h3>Creating Memorable and Secure Passwords</h3>
        <p>
          People often prefer passwords that are easy to remember. One effective way to create a secure yet memorable password is to use a common passphrase and convert that phrase into a password. For example, the phrase:
        </p>
        <p className="example">
          "I have 2 Labrador retrievers! Fido and Spot,"
        </p>
        <p>
          could be converted to:
        </p>
        <p className="example">
          <code>Ih2Lr!F+S</code>
        </p>
        <p>
          By using this method, you can create a password that is both secure and easy to remember.
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
