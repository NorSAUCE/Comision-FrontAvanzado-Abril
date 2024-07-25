// src/components/Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import '../App.css';

const Cart = () => {
  const items = useSelector(state => state.cart.items);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {items.length > 0 ? (
        items.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;