import React from 'react';
import auth from '../services/authService';
import { Redirect } from 'react-router-dom';

const HomePage = () => {
  const user = auth.getCurrentUser();
  if (user) return <Redirect to="/dashboard" />;

  return <Redirect to="/login" />;

  // return <h1>Welcome!</h1>;
};

export default HomePage;
