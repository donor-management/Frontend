import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MainNav = ({ user }) => {
  return (
    <nav>
      <Link to="/">Home</Link>

      {!user && (
        <>
          <NavLink className="" to="/login">
            Login
          </NavLink>
          <NavLink className="" to="/register">
            Register
          </NavLink>
        </>
      )}
      {user && (
        <>
          <NavLink className="" to="/profile">
            {user.name}
          </NavLink>
          <NavLink className="" to="/logout">
            Logout
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default MainNav;
