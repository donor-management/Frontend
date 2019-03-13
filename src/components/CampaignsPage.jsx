import React, { useContext } from 'react';
import DashNav from './DashNav';
import { AppDataContext } from '../store/AppDataContext';
import DataListViewContainer from './common/DataListViewContainer';

import Button from './common/Button';
import useToggle from '../hooks/useToggle';
import CampaignForm from './CampaignForm';

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
            <div className="goal">{c.cash_goal}</div>
            <div className="received">{c.funds_received}</div>
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
      <DataListViewContainer>
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
      </DataListViewContainer>
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
