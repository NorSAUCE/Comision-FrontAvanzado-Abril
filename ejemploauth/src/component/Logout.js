// src/components/Logout.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Logout = () => {
  const { logout } = useContext(AuthContext);

  return (
    <button onClick={logout}>Cerrar sesión</button>
  );
};

export default Logout;
