// src/components/CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/store';
import '../App.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (e) => {
    dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) }));
  };

  return (
    <div className="cart-item">
      <h2>{item.name}</h2>
      <p>Precio: ${item.price}</p>
      <input
        type="number"
        value={item.quantity}
        onChange={handleQuantityChange}
        min="1"
      />
      <button onClick={handleRemove}>Eliminar</button>
    </div>
  );
};

export default CartItem;