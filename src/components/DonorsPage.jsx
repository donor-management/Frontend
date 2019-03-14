import React, { useContext, useState } from 'react';
import { AppDataContext } from '../store/AppDataContext';
import styled from 'styled-components';
import DashNav from './DashNav';
import DonorForm from './DonorForm';
import Button from './common/Button';
import useToggle from '../hooks/useToggle';
import DonorListItem from './DonorListItem';

const DonorPageContainer = styled.section`
  font-size: 90%;
  [data-contact-stale='true'] {
    color: crimson;
  }
  .control {
    /* position: relative; */
    opacity: 0.5;
    margin: 0 0.25rem;
    padding: 0;
    background: transparent;
    vertical-align: baseline;
    /* line-height: 1.5rem; */
    img {
      height: 1.5rem;
      margin-bottom: -0.2rem;
    }
  }
  .control:hover {
    opacity: 1;
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
  .donor-name {
    width: 25%;
  }
  .donor-contributions {
    width: 15%;
  }
  .donor-contact {
    width: 25%;
    overflow: hidden;
  }
  .donor-last-contact {
    width: 20%;
  }
  .controls {
    /* width: %; */
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
      <div className="donors-list">
        {donors.map(donor => (
          <DonorListItem
            key={donor.id}
            donor={donor}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <DashNav />
      <DonorPageContainer>
        <h1>
          {pageTitle}{' '}
          {!showForm && (
            <Button className="btn-add control" title="Add donor" onClick={toggleShowForm}>
              <img src="/icons/plus-circle.svg" alt="Add donor" />
            </Button>
          )}
        </h1>
        {showForm && <DonorForm toggle={toggleShowForm} />}
        {renderDonors()}
      </DonorPageContainer>
    </>
  );
};

export default DonorsPage;
