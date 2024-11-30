// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Coastal kitchens</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/Login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
