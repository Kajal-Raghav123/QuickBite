import React from 'react';
import { useCart } from '../CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
