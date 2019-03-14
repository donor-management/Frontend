import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppDataContext } from '../store/AppDataContext';

const Logout = () => {
  const { auth } = useContext(AppDataContext);
  auth.logout();

  return <Redirect to="/" />;
  // return (window.location = '/');
};

export default Logout;
