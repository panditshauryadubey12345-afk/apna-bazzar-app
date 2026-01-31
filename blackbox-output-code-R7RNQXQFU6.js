// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import AuthModal from './components/AuthModal';
import './styles.css';  // Tailwind CSS imports

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSlider />
              <ProductGrid />
            </>
          } />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Cart />  {/* Persistent cart modal */}
        <AuthModal />  {/* Auth modal */}
      </div>
    </Router>
  );
}

export default App;