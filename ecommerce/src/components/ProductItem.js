// src/components/ProductItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/store';
import '../App.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductItem;
