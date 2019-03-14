import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppDataContext } from '../store/AppDataContext';
import capitalize from '../helpers/capitalize';
import pluralize from '../helpers/pluralize';
import DashNav from './DashNav';
import isStale from '../helpers/isStale';
import formatDollars from '../helpers/formatDollars';

const StyledDashContainer = styled.section`
  .dash-tile {
    margin-bottom: 1rem;
    padding: 2rem;
    background: linear-gradient(302deg, rgba(120, 132, 213, 1) 0%, rgba(92, 106, 196, 1) 100%);
    border-radius: 0.5rem;
    color: white;
    font-size: 1.5rem;
    box-shadow: 2px 2px 5px #eee;
  }
  .figure {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .caption span {
    display: block;
    font-weight: bold;
  }
`;

const DashboardPage = () => {
  const { auth, donorStore, campaignStore } = useContext(AppDataContext);
  const name = capitalize(auth.user.username);

  const activeCampaignsCount = campaignStore.campaigns.reduce((count, campaign) => {
    return campaign.active_campaign === 1 ? count + 1 : count;
  }, 0);

  const staleDonorsCount = donorStore.donors.reduce((count, donor) => {
    return isStale(donor.last_contacted) ? count + 1 : count;
  }, 0);

  const totalContributions = donorStore.donors.reduce((total, donor) => {
    return total + donor.total_donations;
  }, 0);

  return (
    <div className="dashboard-wrapper">
      <DashNav />
      <StyledDashContainer>
        <h1>Welcome, {name}</h1>
        {!donorStore.donors.length && (
          <p className="no-donors">
            You have no donors. <Link to="/donors">Add a donor</Link>
          </p>
        )}
        <div className="dash-tile">
          <div className="figure">{formatDollars(totalContributions)}</div>
          <div className="caption">raised</div>
        </div>
        <div className="dash-tile">
          <div className="figure">{staleDonorsCount}</div>
          <div className="caption">
            donor{pluralize(staleDonorsCount)} last contacted more than 60 days ago
            {!staleDonorsCount && <span>Good work!</span>}
          </div>
        </div>
        <div className="dash-tile">
          <div className="figure">{activeCampaignsCount}</div>
          <div className="caption">active campaign{pluralize(activeCampaignsCount)}</div>
        </div>
      </StyledDashContainer>
    </div>
  );
};

export default DashboardPage;
