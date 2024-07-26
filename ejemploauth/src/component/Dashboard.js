// src/components/Dashboard.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Logout from './Logout';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Bienvenido, {user.username}!</h1>
      <Logout />
    </div>
  );
};

export default Dashboard;
