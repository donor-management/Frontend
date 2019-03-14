import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppDataContext } from '../../store/AppDataContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(AppDataContext);

  return (
    <Route
      {...rest}
      render={props => {
        if (auth.user) return <Component {...props} />;

        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
