// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CakeDetails from './pages/CakeDetails';
import Cart from './pages/Cart';
import About from './pages/About';
import Login from './pages/Login';
const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cake/:id" element={<CakeDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;



