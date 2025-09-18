import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize from localStorage if available
  const [auth, setAuthState] = useState(() => {
    const saved = localStorage.getItem('auth');
    return saved ? JSON.parse(saved) : null;
  });

  const setAuth = (data) => {
    setAuthState(data);
    localStorage.setItem('auth', JSON.stringify(data));
  };

  const logout = () => {
    setAuthState(null);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
