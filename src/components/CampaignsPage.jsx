import React, { useContext } from 'react';
import DashNav from './DashNav';
import { AppDataContext } from '../store/AppDataContext';
import useToggle from '../hooks/useToggle';
import CampaignForm from './CampaignForm';
import CampaignListItem from './CampaignListItem';
import ActionButton from './common/ActionButton';
import DataListContainer from './common/DataListContainer';

const CampaignsPage = () => {
  const { campaignStore } = useContext(AppDataContext);
  const [showForm, toggleShowForm] = useToggle(false);
  const campaignCount = campaignStore.state.length;
  const pageTitle = `${campaignCount} campaign${campaignCount === 1 ? '' : 's'}`;

  const renderCampaigns = () => {
    if (!campaignCount) return <p className="no-records">You have no campaigns.</p>;

    return (
      <DataListContainer>
        {campaignStore.state.map(c => (
          <CampaignListItem
            key={c.id}
            campaign={c}
            handleDelete={campaignStore.delete}
            handleUpdate={campaignStore.update}
          />
        ))}
      </DataListContainer>
    );
  };

  return (
    <>
      <DashNav />
      <section>
        <h1>
          {pageTitle}
          {!showForm && (
            <ActionButton
              imgSrc="/icons/plus-circle.svg"
              onClick={toggleShowForm}
              alt="Add campaign"
            />
          )}
        </h1>
        {showForm && <CampaignForm toggle={toggleShowForm} />}
        {campaignStore.isLoading && <div className="loading">Loading...</div>}
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
