import { useState } from 'react';
import donorService from '../services/donorService';

const useDonors = () => {
  const [donors, setDonors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestWrapper = cb => () => {
    setIsLoading(true);
    setError(null);
    try {
      cb();
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

  // how to have these return a function that can be called directly
  // instead of creating a closure and immediately invoking it?
  // feel like I'm missing some little piece of the puzzle
  // if I return the request wrapper directly, it doesn't execute when
  // top level function is called
  const saveDonor = donor => {
    const request = requestWrapper(async () => {
      console.log(donor);
      const { data } = await donorService.save(donor);
      setDonors(prevDonors => [data.donor, ...prevDonors]);
    });
    request();
  };

  const updateDonor = donor => {
    const request = requestWrapper(async () => {
      const { data } = await donorService.save(donor);
      setDonors(prevDonors =>
        prevDonors.map(d => {
          if (d.id !== data.donor.id) return d;
          return data.donor;
        })
      );
    });
    request();
  };

  const deleteDonor = id => {
    const request = requestWrapper(async () => {
      console.log(id);
      const { data } = await donorService.delete(id);
      if (data === 1) {
        setDonors(prevDonors => prevDonors.filter(d => d.id !== id));
      }
    });
    request();
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
