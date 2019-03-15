import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  background: #eee;
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
    margin-right: 1.5rem;
    a {
      display: flex;
      img {
        margin-right: 0.5rem;
        height: 1.25rem;
      }
    }
  }
  a {
    padding: 0.25rem;
    border: none;
  }
  a:hover {
    color: #4acaa8;
  }
  li:last-child {
    margin-right: 0;
  }
`;

const DashNav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/dashboard">
            <img src="/icons/clipboard.svg" alt="Dashboard" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/donors">
            <img src="/icons/users.svg" alt="Donors" /> Donors
          </NavLink>
        </li>
        <li>
          <NavLink to="/campaigns">
            <img src="/icons/trending-up.svg" alt="Campaigns" />
            Campaigns
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default DashNav;
