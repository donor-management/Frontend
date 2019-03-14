import { useState } from 'react';
import donorService from '../services/donorService';

const useDonors = () => {
  const [donors, setDonors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDonors = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await donorService.getAll();
      setDonors(
        data
          .map(d => d.donor)
          .sort((a, b) => {
            return a.last_contact - b.last_contact;
          })
      );
      setIsLoading(false);
    } catch (ex) {
      console.log(ex);
      setError(ex);
      setIsLoading(false);
    }
  };

  const saveDonor = async donor => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await donorService.save(donor);
      setDonors(prev => [data.donor, ...prev]);
      setIsLoading(false);
    } catch (ex) {
      console.log(ex);
      setError(ex);
      setIsLoading(true);
    }
  };

  const updateDonor = async donor => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await donorService.save(donor);
      setDonors(
        donors.map(d => {
          if (d.id !== data.donor.id) return d;
          return data.donor;
        })
      );
      setIsLoading(false);
    } catch (ex) {
      console.log(ex);
      setError(ex);
      setIsLoading(true);
    }
  };

  const deleteDonor = async id => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await donorService.delete(id);
      if (data === 1) {
        setDonors(donors.filter(d => d.id !== id));
      }
      setIsLoading(false);
    } catch (ex) {
      console.log(ex);
      setError(ex);
      setIsLoading(true);
    }
  };

  return {
    donors,
    setDonors,
    isLoading,
    error,
    getAll: getDonors,
    save: saveDonor,
    update: updateDonor,
    delete: deleteDonor
  };
};

export default useDonors;
