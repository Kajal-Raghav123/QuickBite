import React from 'react';
import FoodList from '../Components/FoodList';

const Home = () => {
  return (
    <div className="home">
      <div className="welcome-section">
        <h1>Welcome to QuickBite</h1>
        <p>Delicious food delivered at your doorstep!</p>
        <div className="search-container">
          <input className="search-input" type="text" placeholder="Search for food..." />
        </div>
      </div>
      <FoodList />
    </div>
  );
};

export default Home;