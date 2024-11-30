// src/Pages/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';
import CakesData from '../CakesData';

function Categories() {
  return (
    <div className="categories">
      <h2>Cake Categories</h2>
      <div className="cakes-list">
        {CakesData.map((cake) => (
          <div key={cake.id} className="cake-item">
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p>{cake.price}</p>
            <Link to={`/cake/Rs{cake.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
