import React, { useContext } from 'react';
import styled from 'styled-components';
import MailTo from './common/MailTo';
import getDate from '../helpers/getDate';
import isStale from '../helpers/isStale';
import formatDollars from '../helpers/formatDollars';
import ActionButton from './common/ActionButton';
import useToggle from '../hooks/useToggle';
import DonationForm from './DonationForm';

const DonorListItemContainer = styled.div`
  padding: 1rem;
  min-width: 30rem;
  &[data-form-active='true'] {
    min-height: 10rem;
  }
  .name {
    font-size: 145%;
    margin-bottom: 1.5rem;
  }
  .contact {
  }
  .contributions {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    text-align: right;
    font-size: 125%;
    font-weight: bold;
    .label {
      font-size: 0.8rem;
      text-transform: uppercase;
    }
  }
  .stale-tag {
    margin-left: 0.5rem;
    padding: 0.2rem 0.5rem;
    color: #5c6ac4;
    border-radius: 0.25rem;
    border: 1px solid #5c6ac4;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  .controls {
    position: absolute;
    top: 1rem;
    right: 0.75rem;
  }
`;

const DonorListItem = ({ donor, handleUpdate, handleDelete }) => {
  const [showDonationForm, toggleDonationForm] = useToggle(false);

  const update = donor => {
    donor.last_contact = Date.now();
    handleUpdate(donor);
  };

  return (
    <DonorListItemContainer data-form-active={showDonationForm}>
      <div className="info">
        <div className="name">
          {donor.name}
          {isStale(donor.last_contact) && <span className="stale-tag">over 60 days</span>}
        </div>

        <div className="contact">
          Last contacted {getDate(donor.last_contact)} <br />
          <MailTo email={donor.email}>{donor.email}</MailTo>
        </div>
      </div>

      <div className="contributions">
        <span className="label">Total gifts</span> {formatDollars(donor.total_donations)}
      </div>
      <div className="controls">
        <ActionButton
          imgSrc="/icons/clock.svg"
          alt="Mark contacted"
          onClick={() => update(donor)}
        />
        <ActionButton
          imgSrc="/icons/money-sign.svg"
          alt="Add donation"
          onClick={toggleDonationForm}
        />
        <ActionButton
          imgSrc="/icons/trash.svg"
          alt="Delete donor"
          onClick={() => handleDelete(donor.id)}
        />
      </div>
      {showDonationForm && <DonationForm donorId={donor.id} />}
    </DonorListItemContainer>
  );
};

export default DonorListItem;
