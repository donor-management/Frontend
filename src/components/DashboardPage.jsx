import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';
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
    background: #5c6ac4;
    border-radius: 0.5rem;
    color: white;
    font-size: 1.5rem;
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
  const { user } = useContext(AuthContext);
  const { donors, campaigns } = useContext(AppDataContext);
  const name = capitalize(user.username);

  const activeCampaignsCount = campaigns.reduce((count, campaign) => {
    return campaign.active_campaign === 1 ? count + 1 : count;
  }, 0);

  const staleDonorsCount = donors.reduce((count, donor) => {
    return isStale(donor.last_contacted) ? count + 1 : count;
  }, 0);

  const totalContributions = donors.reduce((total, donor) => {
    return total + donor.total_donations;
  }, 0);

  return (
    <div className="dashboard-wrapper">
      <DashNav />
      <StyledDashContainer>
        <h1>Welcome, {name}</h1>
        {!donors.length && (
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
