import React, { useContext } from 'react';
import { AppDataContext } from '../store/AppDataContext';
import { Link } from 'react-router-dom';
import DashNav from './DashNav';
import DonorForm from './DonorForm';
import ActionButton from './common/ActionButton';
import useToggle from '../hooks/useToggle';
import DonorListItem from './DonorListItem';
import DataListContainer from './common/DataListContainer';

const DonorsPage = () => {
  const { donorStore } = useContext(AppDataContext);
  const [showForm, toggleShowForm] = useToggle(false);

  const donorCount = donorStore.state.length;

  const pageTitle = `${donorCount} donor${donorCount === 1 ? '' : 's'}`;

  const renderDonors = () => {
    if (!donorCount)
      return (
        <p className="no-donors">
          You have no donors. <Link to="/donors">Add a donor</Link>
        </p>
      );
    return (
      <DataListContainer>
        {donorStore.state.map(donor => (
          <DonorListItem
            key={donor.id}
            donor={donor}
            handleUpdate={donorStore.update}
            handleDelete={donorStore.delete}
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
          {pageTitle}{' '}
          {!showForm && (
            <ActionButton
              imgSrc="/icons/plus-circle.svg"
              onClick={toggleShowForm}
              alt="Add donor"
            />
          )}
        </h1>
        {showForm && <DonorForm toggle={toggleShowForm} />}
        {donorStore.isLoading && <div className="loading">Loading...</div>}
        {renderDonors()}
      </section>
    </>
  );
};

export default DonorsPage;
