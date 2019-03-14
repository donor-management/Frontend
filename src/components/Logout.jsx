import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';

const Logout = () => {
  const auth = useContext(AuthContext);
  auth.logout();

  return <Redirect to="/" />;
  // return (window.location = '/');
};

export default Logout;
