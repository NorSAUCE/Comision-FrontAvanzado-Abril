// src/components/Counter.js
import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1>Contador: {count}</h1>
    </div>
  );
};

export default Counter;
