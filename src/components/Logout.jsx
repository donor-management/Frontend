import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
// import auth from '../services/authService';
import { AuthContext } from '../store/AuthContext';

const Logout = () => {
  const auth = useContext(AuthContext);
  auth.logout();
  // useEffect(() => {
  // }, []);

  return <Redirect to="/" />;
};

export default Logout;
