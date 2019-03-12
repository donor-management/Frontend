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
      </section>
    </>
  );
};

export default DashboardPage;
