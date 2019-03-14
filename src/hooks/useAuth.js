import { useState } from 'react';
import auth from '../services/authService';

const useAuth = () => {
  const [user, setUser] = useState(auth.getCurrentUser());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);
    try {
      await auth.login(username, password);
      setUser(auth.getCurrentUser());
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsLoading(false);
    }
  };

  const loginWithToken = token => {
    auth.loginWithToken(token);
    setUser(auth.getCurrentUser());
  };

  const logout = () => {
    auth.logout();
    setUser(null);
  };

  return {
    user,
    isLoading,
    error,
    login,
    loginWithToken,
    logout
  };
};

export default useAuth;
