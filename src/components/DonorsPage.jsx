import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppDataContext } from '../store/AppDataContext';
import DashNav from './DashNav';
import DonorForm from './DonorForm';
import MailTo from './common/MailTo';
import Button from './common/Button';
import getDate from '../helpers/getDate';
import daysSince from '../helpers/daysSince';
import formatDollars from '../helpers/formatDollars';

const StyledContainer = styled.section`
  .contacted span {
    font-size: 80%;
    color: crimson;
    font-weight: normal;
    padding-left: 1rem;
  }
  td[data-contact-stale='true'] {
    color: crimson;
  }
`;

const DonorsPage = () => {
  const { donors, donorActions } = useContext(AppDataContext);
  const { delete: handleDelete, update: handleUpdate } = donorActions;

  const isStale = timestamp => {
    return daysSince(timestamp) > 59;
  };

  const formatContribution = num => {
    return num ? formatDollars(num) : '—';
  };

  const renderDonors = () => {
    if (!donors.length) return <div className="loading">Loading...</div>;
    console.log(donors);
    return (
      <div className="donors-list">
        {donors.map(d => (
          <div key={d.id} className="donors-list-item" data-contact-stale={isStale(d.last_contact)}>
            {d.name}
            {formatContribution(d.total_donations)}

            <MailTo email={d.email}>{d.email}</MailTo>

            {getDate(d.last_contact)}
            <Button onClick={() => handleDelete(d.id)}>X</Button>
            <Button
              onClick={() => {
                d.last_contact = Date.now();
                handleUpdate(d);
              }}
            >
              Mark Contacted
            </Button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <DashNav />
      <StyledContainer>
        <h1>Your donors</h1>
        {renderDonors()}
        <DonorForm />
      </StyledContainer>
    </>
  );
};

export default DonorsPage;
