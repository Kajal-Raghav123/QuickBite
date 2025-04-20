import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = ({ setLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  return (
    <div className="navbar">
      <div className="logo">QuickBite</div>
      <ul className="nav-links">
        {/* Use Link components instead of buttons for routing */}
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/cart" className="nav-link">Cart</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  );
};

export default Navbar;