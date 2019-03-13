import React, { useContext } from 'react';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import Button from './common/Button';
import Input from './common/Input';
import { AppDataContext } from '../store/AppDataContext';

const StyledContainer = styled.div`
  margin-bottom: 1rem;
`;

const DonorForm = ({ toggle }) => {
  const { donorActions } = useContext(AppDataContext);

  const saveDonor = () => {
    donorActions.save(newDonor);
    toggle();
  };

  const { values: newDonor, handleChange, handleSubmit } = useForm(saveDonor);

  return (
    <StyledContainer className="donor-form">
      <h3>
        New donor{' '}
        <Button className="btn-close control" title="Close form" onClick={toggle}>
          <img src="/icons/x-circle.svg" alt="Close form" />
        </Button>
      </h3>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          value={newDonor.name}
          onChange={handleChange}
          placeholder="Name"
          label="Name"
          required
        />
        <Input
          name="email"
          value={newDonor.email || ''}
          onChange={handleChange}
          placeholder="Email"
          label="Email"
          required
        />
        <Button>Add Donor</Button>
      </form>
    </StyledContainer>
  );
};

export default DonorForm;
