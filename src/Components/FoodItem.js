import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const FoodItem = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="food-item">
      <img src={process.env.PUBLIC_URL + item.img} alt={item.name} className="food-item-img" />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">₹{item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default FoodItem;
