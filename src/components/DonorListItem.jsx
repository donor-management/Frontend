import React from 'react';
import styled from 'styled-components';
import MailTo from './common/MailTo';
import getDate from '../helpers/getDate';
import isStale from '../helpers/isStale';
import formatDollars from '../helpers/formatDollars';
import ActionButton from './common/ActionButton';
import { updateLocale } from 'moment';

const DonorListItemContainer = styled.div`
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
      </div>
    </DonorListItemContainer>
  );
};

export default DonorListItem;
