// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { loginService } from '../services/authService';

// Crear el contexto
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Recuperar el usuario desde localStorage al iniciar la aplicación
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const user = await loginService(username, password);
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};