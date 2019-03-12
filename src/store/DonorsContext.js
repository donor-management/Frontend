import React, { useEffect, useState } from 'react';
import { getDonors } from '../services/donorService';

// donor shape
// {
//   "id": 4,
//   "org_id": 7,
//   "name": "Mr. Furman Wisoky",
//   "email": "Weston.Kovacek61@hotmail.com",
//   "last_contact": 1534362439284,
//   "total_donations": 233412
// }

const DonorsContext = React.createContext();

const initialState = {
  donors: []
};

const DonorsProvider = ({ children }) => {
  const [donors, setDonors] = useState(initialState);

  // this isn't firing on initial load
  useEffect(() => {
    const fetchDonors = async () => {
      const data = await getDonors();
      console.log(data);
      setDonors('data');
    };
    fetchDonors();
  }, []);

  return <DonorsContext.Provider value={{ donors }}>{children}</DonorsContext.Provider>;
};

export { DonorsProvider, DonorsContext };
