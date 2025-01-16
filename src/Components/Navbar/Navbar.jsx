import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>Contact</li>
        <li>About us</li>
        <li>Home</li>
      </ul>
    </nav>
  );
};

export default Navbar;
