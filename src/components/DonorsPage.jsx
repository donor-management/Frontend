import React, { useContext, useState } from 'react';
import { AppDataContext } from '../store/AppDataContext';
import DashNav from './DashNav';
import DonorForm from './DonorForm';
import MailTo from './common/MailTo';
import Button from './common/Button';
import DataListViewContainer from './common/DataListViewContainer';
import getDate from '../helpers/getDate';
import daysSince from '../helpers/daysSince';
import formatDollars from '../helpers/formatDollars';

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
          <div key={d.id} className="list-item" data-contact-stale={isStale(d.last_contact)}>
            <div className="donor-name">{d.name}</div>
            <div className="donor-contributions">
              {/* <span className="label">Lifetime contribution</span> */}
              {formatContribution(d.total_donations)}
            </div>
            <div className="donor-contact">
              <MailTo email={d.email}>{d.email}</MailTo>
            </div>
            <div className="donor-last-contact">{getDate(d.last_contact)}</div>

            <div className="donor-controls">
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
      <DataListViewContainer>
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
      </DataListViewContainer>
    </>
  );
};

export default DonorsPage;
