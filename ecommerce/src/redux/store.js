// PARA PODER USAR LOS HOOKS DE REDUX TOOLKIT Y REDUX NO OLVIDAR INSTALAR
//CON npm install @reduxjs/toolkit Y npm install react-redux

import { configureStore, createSlice } from '@reduxjs/toolkit';

// Definir el slice del carrito
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    }
  }
});

// Exportar las acciones generadas por createSlice
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

// Crear el store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});

export default store;
