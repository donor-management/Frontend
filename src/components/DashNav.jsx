import React from 'react';
import { NavLink } from 'react-router-dom';

const DashNav = ({ user }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/donors">Donors</NavLink>
        </li>
        <li>
          <NavLink to="/campaigns">Campaigns</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DashNav;
