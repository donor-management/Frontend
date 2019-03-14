import React, { useEffect } from 'react';
import useDonors from '../hooks/useDonors';
import useCampaigns from '../hooks/useCampaigns';

const AppDataContext = React.createContext();

const AppDataProvider = ({ children }) => {
  const donorStore = useDonors();
  const campaignStore = useCampaigns();

  // logging
  useEffect(() => {
    console.log('donorStore :', donorStore);
  }, [donorStore]);
  useEffect(() => {
    console.log('campaignStore :', campaignStore);
  }, [campaignStore]);

  return (
    <AppDataContext.Provider value={{ donorStore, campaignStore }}>
      {children}
    </AppDataContext.Provider>
  );
};

export { AppDataProvider, AppDataContext };
