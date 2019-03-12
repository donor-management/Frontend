import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../store/AuthContext';

const StyledNav = styled.nav`
  background: #4acaa8;
  padding: 1rem 1.5rem;
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Lato';
  }
  .active {
    font-weight: bold;
  }
  ul {
    padding: 0;
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
    border: none;
  }
  a:hover {
    color: white;
  }
  li:last-child {
    margin-right: 0;
  }
`;

const MainNav = () => {
  const { user } = useContext(AuthContext);

  return (
    <StyledNav>
      <ul>
        <li className="logo">
          <Link to="/">DM</Link>
        </li>

        {!user && (
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
        )}
        {user && (
          <>
            <li>
              <NavLink to="/dashboard">{user.name} Dash</NavLink>
            </li>
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          </>
        )}
      </ul>
    </StyledNav>
  );
};

export default MainNav;
