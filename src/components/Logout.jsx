import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../services/authService';

const Logout = () => {
  useEffect(() => {
    auth.logout();
  }, []);

  return <Redirect to="/" />;
};

export default Logout;
