import React, { useContext } from 'react';
import useForm from '../hooks/useForm';
import Button from './common/Button';
import Input from './common/Input';
import { AppDataContext } from '../store/AppDataContext';

const DonorForm = ({ toggle }) => {
  const { donorActions } = useContext(AppDataContext);

  const saveDonor = () => {
    donorActions.save(newDonor);
    toggle();
  };

  const { values: newDonor, handleChange, handleSubmit } = useForm(saveDonor);

  return (
    <div className="donor-form">
      <h3>
        New donor{' '}
        <Button className="btn-close control" title="Close form" onClick={toggle}>
          <img src="/icons/x-circle.svg" alt="Close form" />
        </Button>
      </h3>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          value={newDonor.name}
          onChange={handleChange}
          placeholder="Name"
          label="Name"
        />
        <Input
          name="email"
          value={newDonor.email || ''}
          onChange={handleChange}
          placeholder="Email"
          label="Email"
        />
        <Button>Add Donor</Button>
      </form>
    </div>
  );
};

export default DonorForm;
