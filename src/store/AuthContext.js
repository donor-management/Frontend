import React, { useState } from 'react';
import auth from '../services/authService';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(auth.getCurrentUser());

  const login = async (username, password) => {
    try {
      await auth.login(username, password);
      setUser(auth.getCurrentUser());
    } catch (ex) {
      console.log(ex);
    }
  };

  const loginWithToken = token => {
    auth.loginWithToken(token);
    setUser(auth.getCurrentUser());
  };

  const logout = () => {
    auth.logout();
    setUser(auth.getCurrentUser());
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loginWithToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
