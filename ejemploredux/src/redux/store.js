// src/redux/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Definir el slice del contador
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    }
  }
});

// Exportar las acciones generadas por createSlice
export const { increment, decrement, reset } = counterSlice.actions;

// Crear el store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

export default store;
