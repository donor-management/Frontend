import { useState, useEffect, useContext } from 'react';
import donorService from '../services/donorService';
import { AuthContext } from '../store/AuthContext';

const useDonorService = () => {
  const { user } = useContext(AuthContext);
  const [donors, setDonors] = useState([]);

  const getDonors = async () => {
    const { data } = await donorService.getAll();
    setDonors(
      data
        .map(d => d.donor)
        .sort((a, b) => {
          return a.last_contact - b.last_contact;
        })
    );
  };

  useEffect(() => {
    getDonors();
  }, []);

  const saveDonor = async donor => {
    donor.org_id = user.org_id;
    const { data } = await donorService.save(donor);
    setDonors(prev => [data.donor, ...prev]);
  };

  const updateDonor = async donor => {
    const { data } = await donorService.save(donor);
    setDonors(
      donors.map(d => {
        if (d.id !== data.donor.id) return d;
        return data.donor;
      })
    );
  };

  const deleteDonor = async id => {
    const { data } = await donorService.delete(id);
    if (data === 1) {
      setDonors(donors.filter(d => d.id !== id));
    }
  };

  return [
    donors,
    {
      getAll: getDonors,
      save: saveDonor,
      update: updateDonor,
      delete: deleteDonor
    }
  ];
};

export default useDonorService;
