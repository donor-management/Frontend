import { useState } from 'react';
import donorService from '../services/donorService';

const useDonors = () => {
  const [donors, setDonors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestWrapper = cb => (...args) => {
    setIsLoading(true);
    setError(null);
    try {
      cb(...args);
      setIsLoading(false);
    } catch (error) {
      setError(error.request.data);
      setIsLoading(false);
    }
  };

  const getDonors = requestWrapper(async () => {
    const { data } = await donorService.getAll();
    setDonors(
      data
        .map(d => d.donor)
        .sort((a, b) => {
          return a.last_contact - b.last_contact;
        })
    );
  });

  const saveDonor = requestWrapper(async donor => {
    const { data } = await donorService.save(donor);
    setDonors(prevDonors => [data.donor, ...prevDonors]);
  });

  const updateDonor = requestWrapper(async donor => {
    const { data } = await donorService.save(donor);
    setDonors(prevDonors =>
      prevDonors.map(d => {
        if (d.id !== data.donor.id) return d;
        return data.donor;
      })
    );
  });

  const deleteDonor = requestWrapper(async id => {
    const { data } = await donorService.delete(id);
    if (data === 1) {
      setDonors(prevDonors => prevDonors.filter(d => d.id !== id));
    }
  });

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
