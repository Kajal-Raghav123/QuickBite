import React from 'react';
import foodData from '../Data/foodData';
import FoodItem from './FoodItem';

const FoodList = () => {
  return (
    <div className="menu-container">
      {foodData.map((item) => (
        <FoodItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FoodList;