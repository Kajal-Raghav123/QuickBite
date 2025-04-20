import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Route */}
          <Route path="/about" element={<About />} /> {/* About Route */}
          <Route path="/cart" element={<Cart />} /> {/* Cart Route */}
          <Route path="/login" element={<Login />} /> {/* Login Route */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;