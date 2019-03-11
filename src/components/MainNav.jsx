import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: #eee;
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Lato';
  }
  ul {
    padding: 1rem;
    margin: 0;
    display: flex;
    align-items: center;
  }
  li {
    list-style: none;
    margin-right: 1rem;
  }
  a {
    padding: 0.25rem;
  }
  li:last-child {
    margin-right: 0;
  }
`;

const MainNav = ({ user }) => {
  return (
    <StyledNav>
      <ul>
        <li className="logo">
          <Link to="/">DM</Link>
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
              <NavLink className="" to="/dashboard">
                {user.name} Dash
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/logout">
                Logout
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </StyledNav>
  );
};

export default MainNav;
