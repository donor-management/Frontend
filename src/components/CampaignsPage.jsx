import React, { useContext } from 'react';
import styled from 'styled-components';
import DashNav from './DashNav';
import { AppDataContext } from '../store/AppDataContext';
import Button from './common/Button';
import useToggle from '../hooks/useToggle';
import CampaignForm from './CampaignForm';
import formatDollars from '../helpers/formatDollars';

const CampaignPageContainer = styled.section`
  /* .contacted span {
    font-size: 80%;
    color: crimson;
    font-weight: normal;
    padding-left: 1rem;
  } */
  font-size: 90%;
  [data-contact-stale='true'] {
    color: crimson;
  }
  .control {
    /* position: relative; */
    opacity: 0.5;
    margin: 0 0.25rem;
    padding: 0;
    background: transparent;
    vertical-align: baseline;
    /* line-height: 1.5rem; */
    img {
      height: 1.5rem;
      margin-bottom: -0.2rem;
    }
  }
  .control:hover {
    opacity: 1;
  }
  .list-item {
    background: #f4f4f4;
    margin-bottom: 0.5rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .list-item:hover {
    background: #eee;
  }
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
  .controls {
    /* width: %; */
  }
`;

const CampaignsPage = () => {
  const { campaigns, campaignActions } = useContext(AppDataContext);
  const { delete: handleDelete, update: handleUpdate } = campaignActions;
  const [showForm, toggleShowForm] = useToggle(false);
  const campaignCount = campaigns.length;
  const pageTitle = `${campaignCount} campaign${campaignCount === 1 ? '' : 's'}`;

  const renderCampaigns = () => {
    if (!campaigns.length) return <div className="loading">Loading...</div>;

    return (
      <div className="campaigns-list">
        {campaigns.map(c => (
          <div className="list-item" key={c.id}>
            <div className="title">{c.title}</div>
            <div className="cause">{c.cause}</div>
            <div className="description">{c.description}</div>
            <div className="goal">{formatDollars(c.cash_goal)}</div>
            <div className="received">{formatDollars(c.funds_received)}</div>
            <div className="active">{c.active_campaign ? 'Active' : 'Inactive'}</div>
            <div className="controls">
              <Button
                onClick={() => handleDelete(c.id)}
                className="btn-delete control"
                title="Delete campaign"
              >
                <img src="/icons/trash.svg" alt="Delete campaign" />
              </Button>
              <Button className="btn-edit control" title="Edit campaign">
                <img src="/icons/edit.svg" alt="Edit campaign" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <DashNav />
      <CampaignPageContainer>
        <h1>
          {pageTitle}{' '}
          {!showForm && (
            <Button className="btn-add control" title="Add campaign" onClick={toggleShowForm}>
              <img src="/icons/plus-circle.svg" alt="Add campaign" />
            </Button>
          )}
        </h1>
        {showForm && <CampaignForm toggle={toggleShowForm} />}
        {renderCampaigns()}
      </CampaignPageContainer>
    </>
  );
};

export default CampaignsPage;

// {
//     "id": 1,
//     "org_id": 1,
//     "title": "Adaptive eco-centric internet solution",
//     "cause": "Pre-emptive",
//     "description": "Officiis nostrum nesciunt necessitatibus. Veniam quis eum",
//     "cash_goal": 30510,
//     "funds_received": 158,
//     "active_campaign": 1
//   }
