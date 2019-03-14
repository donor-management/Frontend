import React from 'react';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import Button from './common/Button';
import Input from './common/Input';

const StyledContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 1rem;
  form {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }
  input {
    margin-right: 0.75rem;
  }
  label {
    display: none;
  }
  .form-group {
    margin: 0;
  }
`;

const DonationForm = ({ recordDonation }) => {
  const handleSubmit = e => {
    e.preventDefault();
    recordDonation(donation);
    handleClear();
  };

  const { values: donation, handleChange, handleClear } = useForm(null);

  return (
    <StyledContainer>
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
        {/* <Input
          name="cause"
          value={donation.cause}
          onChange={handleChange}
          placeholder="Cause"
          label="Cause"
          required
        /> */}
        <Button>Record</Button>
      </form>
    </StyledContainer>
  );
};

export default DonationForm;
