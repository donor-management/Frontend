import React, { useContext } from 'react';
import styled from 'styled-components';
import DashNav from './DashNav';
import { AppDataContext } from '../store/AppDataContext';
import Button from './common/Button';
import useToggle from '../hooks/useToggle';
import CampaignForm from './CampaignForm';
import formatDollars from '../helpers/formatDollars';
import ActionButton from './common/ActionButton';

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
              <ActionButton
                imgSrc="/icons/trash.svg"
                onClick={() => handleDelete(c.id)}
                alt="Delete campaign"
              />
              <ActionButton imgSrc="/icons/edit.svg" onClick={null} alt="Edit campaign" />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <DashNav />
      <section>
        <h1>
          {pageTitle}{' '}
          {!showForm && (
            <ActionButton
              imgSrc="/icons/plus-circle.svg"
              onClick={toggleShowForm}
              alt="Add campaign"
            />
          )}
        </h1>
        {showForm && <CampaignForm toggle={toggleShowForm} />}
        {renderCampaigns()}
      </section>
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
