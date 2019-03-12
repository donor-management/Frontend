import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DashNav from './DashNav';
import { getDonors } from '../services/donorService';
import Table from './common/Table';
import MailTo from './common/MailTo';
import getDate from '../helpers/getDate';
import daysSince from '../helpers/daysSince';
import formatDollars from '../helpers/formatDollars';

// import { DonorsContext } from '../store/DonorsContext';

const StyledContainer = styled.section`
  .contacted span {
    font-size: 80%;
    color: crimson;
    font-weight: normal;
    padding-left: 1rem;
  }
  td[data-contact-stale='true'] {
    color: crimson;
  }
`;

const DonorsPage = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      const { data } = await getDonors();

      setDonors(
        data.sort((a, b) => {
          return a.last_contact - b.last_contact;
        })
      );
    };
    fetchDonors();
  }, []);

  const isStale = timestamp => {
    return daysSince(timestamp) > 59;
  };

  const formatContribution = num => {
    return num ? formatDollars(num) : '—';
  };

  const renderDonors = () => {
    if (!donors.length) return <div className="loading">Loading...</div>;

    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contributions</th>
            <th>Email</th>
            <th className="contacted">
              Last Contacted <span>> 60 days ago</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {donors.map(d => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{formatContribution(d.total_donations)}</td>
              <td>
                <MailTo email={d.email}>{d.email}</MailTo>
              </td>
              <td data-contact-stale={isStale(d.last_contact)}>{getDate(d.last_contact)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <>
      <DashNav />
      <StyledContainer>
        <h1>Your donors</h1>
        {renderDonors()}
      </StyledContainer>
    </>
  );
};

export default DonorsPage;
