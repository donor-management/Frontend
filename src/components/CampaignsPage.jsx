import React, { useContext } from 'react';
import DashNav from './DashNav';
import { AppDataContext } from '../store/AppDataContext';

const CampaignsPage = () => {
  const { campaigns } = useContext(AppDataContext);

  const renderCampaigns = () => {
    if (!campaigns.length) return <div className="loading">Loading...</div>;

    return (
      <div className="campaigns-list">
        {campaigns.map(c => (
          <div className="campaign-list-item" key={c.id}>
            {c.title}, {c.cause}, {c.cash_goal}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <DashNav />
      <section>
        <h1>Your campaigns</h1>
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
