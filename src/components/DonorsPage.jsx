import React, { useContext, useState } from 'react';
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
  [data-contact-stale='true'] {
    color: crimson;
  }
  .control {
    opacity: 0.5;
    margin: 0 0.25rem;
    padding: 0;
    background: transparent;
    img {
      height: 1.5rem;
    }
  }
  .control:hover {
    opacity: 1;
  }
  .donors-list-item {
    background: #eee;
    margin-bottom: 0.5rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .name {
    width: 25%;
  }
  .contributions {
    width: 15%;
  }
  .contact {
    width: 30%;
    overflow: hidden;
  }
  .last-contact {
    width: 20%;
  }
  .controls {
    /* width: %; */
  }
`;

const DonorsPage = () => {
  const { donors, donorActions } = useContext(AppDataContext);
  const { delete: handleDelete, update: handleUpdate } = donorActions;
  const [showForm, setShowForm] = useState(false);

  const isStale = timestamp => {
    return daysSince(timestamp) > 59;
  };

  const formatContribution = num => {
    return num ? formatDollars(num) : '—';
  };

  const toggleShowForm = () => {
    setShowForm(prev => !prev);
  };

  const donorCount = donors.length;

  const pageTitle = `${donorCount} donor${donorCount === 1 ? '' : 's'}`;

  const renderDonors = () => {
    if (!donorCount) return <div className="loading">Loading...</div>;
    console.log(donors);
    return (
      <div className="donors-list">
        {donors.map(d => (
          <div key={d.id} className="donors-list-item" data-contact-stale={isStale(d.last_contact)}>
            <div className="name">{d.name}</div>
            <div className="contributions">
              {/* <span className="label">Lifetime contribution</span> */}
              {formatContribution(d.total_donations)}
            </div>
            <div className="contact">
              <MailTo email={d.email}>{d.email}</MailTo>
            </div>
            <div className="last-contact">{getDate(d.last_contact)}</div>

            <div className="controls">
              <Button
                onClick={() => handleDelete(d.id)}
                className="btn-delete control"
                title="Delete donor"
              >
                <img src="/icons/trash.svg" alt="Delete donor" />
              </Button>
              <Button
                onClick={() => {
                  d.last_contact = Date.now();
                  handleUpdate(d);
                }}
                className="btn-update control"
                title="Mark contacted"
              >
                <img src="/icons/clock.svg" alt="Mark contacted" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <DashNav />
      <StyledContainer>
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
      </StyledContainer>
    </>
  );
};

export default DonorsPage;
