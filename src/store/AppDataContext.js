import React, { useEffect } from 'react';
import useDonors from '../hooks/useDonors';
import useCampaigns from '../hooks/useCampaigns';
import donationService from '../services/donationService';

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

  const recordDonation = async donation => {
    await donationService.save(donation);
    donorStore.setDonors(prev => {
      return prev.map(d => {
        if (d.id !== donation.donor_id) return d;
        d.total_donations = d.total_donations + donation.amount;
        return d;
      });
    });
  };

  const donationStore = {
    save: recordDonation
  };

  return (
    <AppDataContext.Provider value={{ donorStore, campaignStore, donationStore }}>
      {children}
    </AppDataContext.Provider>
  );
};

export { AppDataProvider, AppDataContext };
