import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MainNav = ({ user }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {!user && (
          <>
            <li>
              <NavLink className="" to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/register">
                Register
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              {/* <NavLink className="" to="/profile"> */}
              {/* {user.name} */}
              {/* </NavLink> */}
            </li>
            <li>
              <NavLink className="" to="/logout">
                Logout
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default MainNav;
