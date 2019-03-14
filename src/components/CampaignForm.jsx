import React, { useContext } from 'react';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import Button from './common/Button';
import Input from './common/Input';
import { AppDataContext } from '../store/AppDataContext';

const StyledContainer = styled.div`
  margin-bottom: 1rem;
`;

const CampaignForm = ({ toggle }) => {
  const { campaignActions } = useContext(AppDataContext);

  const saveCampaign = () => {
    campaignActions.save(newCampaign);
    toggle();
  };

  const { values: newCampaign, handleChange, handleSubmit } = useForm(saveCampaign);

  return (
    <StyledContainer className="campaign-form">
      <h3>
        New campaign{' '}
        <Button className="btn-close control" title="Close form" onClick={toggle}>
          <img src="/icons/x-circle.svg" alt="Close form" />
        </Button>
      </h3>
      <form onSubmit={handleSubmit}>
        <Input
          name="title"
          value={newCampaign.title}
          onChange={handleChange}
          placeholder="Title"
          label="Title"
          required
        />
        <Input
          name="cause"
          value={newCampaign.cause}
          onChange={handleChange}
          placeholder="Cause"
          label="Cause"
          required
        />
        <Input
          name="description"
          value={newCampaign.description}
          onChange={handleChange}
          placeholder="Description"
          label="Description"
          required
        />
        <Input
          name="cash_goal"
          type="number"
          value={newCampaign.cash_goal}
          onChange={handleChange}
          placeholder="Goal"
          label="Goal"
          required
        />

        <Button>Add Campaign</Button>
      </form>
    </StyledContainer>
  );
};

export default CampaignForm;
