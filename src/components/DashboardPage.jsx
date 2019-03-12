import React, { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import capitalize from '../helpers/capitalize';
import DashNav from './DashNav';

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const name = capitalize(user.username);

  return (
    <>
      <DashNav />
      <section>
        <h1>Welcome, {name}</h1>
        [$$] raised in the last 30 days
        <p>Donors last contacted more than 60 days ago</p>
        [table of donors]
        <p>Active campaigns</p>
        [table of campaigns]
      </section>
    </>
  );
};

export default DashboardPage;
