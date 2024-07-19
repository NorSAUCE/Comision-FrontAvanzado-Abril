// src/components/Controls.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/store';

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
      <button onClick={() => dispatch(reset())}>Reiniciar</button>
    </div>
  );
};

export default Controls;
