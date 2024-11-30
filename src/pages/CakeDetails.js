










import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CakesData from '../CakesData'; // Import CakesData
import { useCart } from '../CartContext'; // Import useCart

const CakeDetails = () => {
  const { id } = useParams();
  const [cake, setCake] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const selectedCake = CakesData.find(cake => cake.id === parseInt(id));
    setCake(selectedCake);
  }, [id]);

  if (!cake) {
    return <div>Cake not found</div>;
  }

  return (
    <div>
      <h1>{cake.name}</h1>
      <p>{cake.description}</p>
      <p>Price: {cake.price}</p>
      <img src={cake.image} alt={cake.name} />
      <button onClick={() => addToCart(cake)}>Add to Cart</button> {/* Add to Cart Button */}
    </div>
  );
};

export default CakeDetails;

  