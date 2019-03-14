import React from 'react';
import styled from 'styled-components';
import MailTo from './common/MailTo';
import getDate from '../helpers/getDate';
import isStale from '../helpers/isStale';
import formatDollars from '../helpers/formatDollars';
import ActionButton from './common/ActionButton';

const DonorListItemContainer = styled.div`
  height: 9rem;
  min-width: 30rem;
  .name {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 145%;
  }
  .contact {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
  .contributions {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    text-align: right;
    font-size: 125%;
    font-weight: bold;
    .label {
      font-size: 1rem;
      font-weight: normal;
    }
  }
  .stale {
    position: absolute;
    top: 3.4rem;
    left: 1rem;
    background: #5c6ac4;
    padding: 0.2rem 0.5rem;
    color: white;
    border-radius: 0.25rem;
    font-size: 80%;
    font-weight: bold;
  }
  .controls {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const DonorListItem = ({ donor, handleUpdate, handleDelete }) => {
  const formatContribution = num => {
    return num ? formatDollars(num) : '—';
  };
  const update = donor => {
    donor.last_contact = Date.now();
    handleUpdate(donor);
  };
  return (
    <DonorListItemContainer data-contact-stale={isStale(donor.last_contact)}>
      <div className="name">{donor.name}</div>
      <div className="contributions">
        {formatContribution(donor.total_donations)}
        <div className="label">Lifetime contribution</div>
      </div>
      <div className="contact">
        Last contacted {getDate(donor.last_contact)} <br />
        <MailTo email={donor.email}>{donor.email}</MailTo>
      </div>
      {isStale(donor.last_contact) && <div className="stale">over 60 days</div>}
      <div className="controls">
        <ActionButton
          imgSrc="/icons/clock.svg"
          alt="Mark contacted"
          onClick={() => update(donor)}
        />
        <ActionButton imgSrc="/icons/money-sign.svg" alt="Add donation" onClick={null} />
        <ActionButton
          imgSrc="/icons/trash.svg"
          alt="Delete donor"
          onClick={() => handleDelete(donor.id)}
        />
      </div>
    </DonorListItemContainer>
  );
};

export default DonorListItem;
