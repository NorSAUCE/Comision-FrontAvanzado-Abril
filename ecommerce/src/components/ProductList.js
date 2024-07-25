// src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';
import '../App.css';

const products = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 200 },
  { id: 3, name: 'Producto 3', price: 300 },
];

const ProductList = () => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
