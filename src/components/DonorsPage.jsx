import React, { useContext, useState } from 'react';
import { AppDataContext } from '../store/AppDataContext';
import styled from 'styled-components';
import DashNav from './DashNav';
import DonorForm from './DonorForm';
import ActionButton from './common/ActionButton';
import useToggle from '../hooks/useToggle';
import DonorListItem from './DonorListItem';

const DataListContainer = styled.div`
  [data-contact-stale='true'] {
    color: crimson;
  }
  .list-item {
    background: #f4f4f4;
    margin-bottom: 0.5rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .list-item:hover {
    background: #eee;
  }
`;

const DonorsPage = () => {
  const { donors, donorActions } = useContext(AppDataContext);
  const { delete: handleDelete, update: handleUpdate } = donorActions;
  const [showForm, toggleShowForm] = useToggle(false);

  const donorCount = donors.length;

  const pageTitle = `${donorCount} donor${donorCount === 1 ? '' : 's'}`;

  const renderDonors = () => {
    if (!donorCount) return <div className="loading">Loading...</div>;
    return (
      <DataListContainer>
        {donors.map(donor => (
          <DonorListItem
            key={donor.id}
            donor={donor}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </DataListContainer>
    );
  };

  return (
    <>
      <DashNav />
      <section>
        <h1>
          {pageTitle}{' '}
          {!showForm && (
            <ActionButton
              imgSrc="/icons/plus-circle.svg"
              onClick={toggleShowForm}
              alt="Add donor"
            />
          )}
        </h1>
        {showForm && <DonorForm toggle={toggleShowForm} />}
        {renderDonors()}
      </section>
    </>
  );
};

export default DonorsPage;
