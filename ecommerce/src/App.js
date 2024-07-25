// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import '../src/App.css';

const App = () => {
  return (
    <>
      <header>
        <h1>My E-commerce</h1>
      </header>
      <div className="container">
        <div className="product-list">
          <ProductList />
        </div>
        <div className="cart">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default App;