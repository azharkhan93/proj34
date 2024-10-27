import React from 'react';
import Image from 'next/image';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Image src="/logo3.png" alt="Logo" width={80} height={60} /> 
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="navbar-button">Get Started</button>
    </nav>
  );
};

export default Navbar;