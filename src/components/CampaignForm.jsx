import React, { useContext } from 'react';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import Button from './common/Button';
import ActionButton from './common/ActionButton';
import Input from './common/Input';
import { AppDataContext } from '../store/AppDataContext';

const StyledContainer = styled.div`
  margin-bottom: 1rem;
`;

const CampaignForm = ({ toggle }) => {
  const { campaignStore } = useContext(AppDataContext);

  const saveCampaign = () => {
    campaignStore.save(newCampaign);
    toggle();
  };

  const { values: newCampaign, handleChange, handleSubmit } = useForm(saveCampaign);

  return (
    <StyledContainer className="campaign-form">
      <h3>
        New campaign
        <ActionButton imgSrc="/icons/x-circle.svg" alt="Close form" onClick={toggle} />
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
        />
        <Input
          name="description"
          value={newCampaign.description}
          onChange={handleChange}
          placeholder="Description"
          label="Description"
        />
        <Input
          name="cash_goal"
          type="number"
          value={newCampaign.cash_goal}
          onChange={handleChange}
          placeholder="$0.00"
          label="Funding Goal"
          required
        />

        <Button>Add Campaign</Button>
      </form>
    </StyledContainer>
  );
};

export default CampaignForm;
