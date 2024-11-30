import React from 'react';
import { useCart } from '../CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return <div><h3>Your cart is empty.</h3></div>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
