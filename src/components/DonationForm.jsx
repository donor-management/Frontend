import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppDataContext } from '../store/AppDataContext';
import useForm from '../hooks/useForm';
import Button from './common/Button';
import Input from './common/Input';
import Select from './common/Select';

const StyledContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 1rem;
  form {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    & > div {
      margin: 0;
    }
  }
  input,
  select {
    margin-right: 0.75rem;
  }
  button {
    margin: 0;
  }
  label {
    display: none;
  }
  .form-group {
    margin: 0;
  }
`;

const DonationForm = ({ donorId }) => {
  const { campaignStore, donationStore } = useContext(AppDataContext);

  const handleSubmit = e => {
    e.preventDefault();
    donation.donor_id = donorId;
    donation.amount = parseInt(donation.amount);
    donation.campaign_id = parseInt(donation.campaign_id);
    donationStore.save(donation);
    handleClear();
  };

  const { values: donation, handleChange, handleClear } = useForm(null);

  const campaignSelectOptions = campaignStore.campaigns.map(c => ({
    label: c.title,
    value: c.id
  }));

  return (
    <StyledContainer>
      {!campaignStore.campaigns.length ? (
        <div>
          <Link to="/campaigns">Add a campaign</Link> to record a donation
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            name="amount"
            type="number"
            value={donation.amount}
            onChange={handleChange}
            placeholder="$0.00"
            label="Amount"
            required
          />
          <Select
            name="campaign_id"
            value={donation.campaign_id}
            options={campaignSelectOptions}
            placeholder="Choose a campaign"
            onChange={handleChange}
            required
          />
          <Button>Record Gift</Button>
        </form>
      )}
    </StyledContainer>
  );
};

export default DonationForm;
