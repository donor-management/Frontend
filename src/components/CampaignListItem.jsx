import React from 'react';
import styled from 'styled-components';
import formatDollars from '../helpers/formatDollars';
import ActionButton from './common/ActionButton';

const CampaignListItemContainer = styled.div`
  min-width: 30rem;
  padding: 1rem 1rem 3.5rem;
  .title {
    font-size: 145%;
    line-height: 1.2;
    padding-bottom: 0.5rem;
    .cause {
      font-size: 1rem;
      font-style: italic;
    }
  }
  .description {
    font-size: 90%;
    padding-right: 5rem;
  }
  .goal,
  .raised {
    font-weight: bold;
    position: absolute;
    bottom: 1rem;
    font-size: 125%;
    span {
      font-size: 0.8rem;
      text-transform: uppercase;
    }
  }
  .goal {
    right: 11rem;
  }
  .raised {
    right: 1rem;
  }
  .met-tag {
    position: absolute;
    bottom: 3.25rem;
    right: 1rem;
    background: #5c6ac4;
    padding: 0.2rem 0.5rem;
    color: white;
    border-radius: 0.25rem;
    font-size: 80%;
    font-weight: bold;
    text-transform: uppercase;
  }
  .controls {
    position: absolute;
    top: 1rem;
    right: 0.75rem;
  }
`;

const CampaignListItem = ({ campaign, handleUpdate, handleDelete }) => {
  const goalMet = campaign.funds_received - campaign.cash_goal > 0;
  return (
    <CampaignListItemContainer>
      <div className="title">
        {campaign.title}
        <div className="cause">{campaign.cause}</div>
      </div>
      <div className="description">{campaign.description}</div>
      <div className="goal">
        <span>Goal</span> {formatDollars(campaign.cash_goal)}
      </div>
      <div className="raised">
        <span>Raised</span> {formatDollars(campaign.funds_received)}
      </div>
      {goalMet && <div className="met-tag">Met</div>}
      <div className="controls">
        {/* <ActionButton imgSrc="/icons/edit.svg" onClick={null} alt="Edit campaign" /> */}
        <ActionButton
          imgSrc="/icons/trash.svg"
          onClick={() => handleDelete(campaign.id)}
          alt="Delete campaign"
        />
      </div>
    </CampaignListItemContainer>
  );
};

export default CampaignListItem;
