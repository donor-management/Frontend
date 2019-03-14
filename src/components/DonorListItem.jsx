import React from 'react';
import styled from 'styled-components';
import MailTo from './common/MailTo';
import getDate from '../helpers/getDate';
import isStale from '../helpers/isStale';
import formatDollars from '../helpers/formatDollars';
import Button from './common/Button';

const DonorListItemContainer = styled.div``;

const DonorListItem = ({ donor, handleUpdate, handleDelete }) => {
  const formatContribution = num => {
    return num ? formatDollars(num) : '—';
  };
  return (
    <DonorListItemContainer>
      <div className="list-item" data-contact-stale={isStale(donor.last_contact)}>
        <div className="donor-name">{donor.name}</div>
        <div className="donor-contributions">
          {/* <span className="label">Lifetime contribution</span> */}
          {formatContribution(donor.total_donations)}
        </div>
        <div className="donor-contact">
          <MailTo email={donor.email}>{donor.email}</MailTo>
        </div>
        <div className="donor-last-contact">{getDate(donor.last_contact)}</div>

        <div className="donor-controls">
          <Button
            onClick={() => {
              donor.last_contact = Date.now();
              handleUpdate(donor);
            }}
            className="btn-update control"
            title="Mark contacted"
          >
            <img src="/icons/clock.svg" alt="Mark contacted" />
          </Button>
          <Button className="btn-add control" title="Add donation">
            <img src="/icons/money-sign.svg" alt="Add donation" />
          </Button>
          <Button
            onClick={() => handleDelete(donor.id)}
            className="btn-delete control"
            title="Delete donor"
          >
            <img src="/icons/trash.svg" alt="Delete donor" />
          </Button>
        </div>
      </div>
    </DonorListItemContainer>
  );
};

export default DonorListItem;
