import React, { useContext } from 'react';
import { AppDataContext } from '../store/AppDataContext';
import DashNav from './DashNav';
import DonorForm from './DonorForm';
import ActionButton from './common/ActionButton';
import useToggle from '../hooks/useToggle';
import DonorListItem from './DonorListItem';
import DataListContainer from './common/DataListContainer';
import pluralize from '../helpers/pluralize';
import LoadingNotify from './common/LoadingNotify';

const DonorsPage = () => {
  const { donorStore } = useContext(AppDataContext);
  const [showForm, toggleShowForm] = useToggle(false);

  const donorCount = donorStore.donors.length;

  const pageTitle = `${donorCount} donor${pluralize(donorCount)}`;

  const renderDonors = () => {
    if (!donorCount) return <p className="no-records">You have no donors.</p>;
    return (
      <DataListContainer>
        {donorStore.donors.map(donor => (
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
        {donorStore.isLoading && <LoadingNotify />}
        {renderDonors()}
      </section>
    </>
  );
};

export default DonorsPage;
