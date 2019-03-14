import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AppDataContext } from '../store/AppDataContext';
import capitalize from '../helpers/capitalize';

const StyledNav = styled.nav`
  background: #4acaa8;
  padding: 1rem 1.5rem;
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Lato';
  }
  .user {
    font-size: 75%;
    font-weight: bold;
    margin-right: 2rem;
  }
  .active {
    font-weight: bold;
  }
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  const { auth } = useContext(AppDataContext);

  return (
    <StyledNav>
      <ul>
        <li className="logo">
          <Link to="/">DM</Link>
        </li>

        {!auth.user && (
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
        )}
        {auth.user && (
          <li>
            <span className="user">Welcome, {capitalize(auth.user.username)}</span>{' '}
            <NavLink to="/logout">Logout</NavLink>
          </li>
        )}
      </ul>
    </StyledNav>
  );
};

export default MainNav;
