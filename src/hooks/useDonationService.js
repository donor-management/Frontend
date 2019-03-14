import { useState } from 'react';
import donationService from '../services/donationService';

const useDonationsService = () => {
  const [donations, setDonations] = useState([]);

  const getDonations = async donorId => {
    const { data } = await donationService.getAll(donorId);
    setDonations(data);
  };

  const saveDonation = async donation => {
    console.log(donation);
    const { data } = await donationService.save(donation);
    setDonations(prev => [data, ...prev]);
  };

  const deleteDonation = async id => {
    const { data } = await donationService.delete(id);
    console.log('data :', data);
    // if (data === 1) {
    //   setDonations(campaigns.filter(c => c.id !== id));
    // }
  };

  return [
    donations,
    {
      getAll: getDonations,
      save: saveDonation,
      delete: deleteDonation
    }
  ];
};

export default useDonationsService;
