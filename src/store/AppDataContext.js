import React, { useEffect } from 'react';
import useDonors from '../hooks/useDonors';
import useCampaigns from '../hooks/useCampaigns';
import donationService from '../services/donationService';
import useAuth from '../hooks/useAuth';

const AppDataContext = React.createContext();

const AppDataProvider = ({ children }) => {
  const auth = useAuth();
  const donorStore = useDonors();
  const campaignStore = useCampaigns();

  useEffect(() => {
    if (auth.user) {
      donorStore.getAll();
      campaignStore.getAll();
    }
  }, [auth.user]);

  // logging
  // useEffect(() => {
  //   console.log('donorStore :', donorStore);
  // }, [donorStore]);
  // useEffect(() => {
  //   console.log('campaignStore :', campaignStore);
  // }, [campaignStore]);
  // useEffect(() => {
  //   console.log('auth :', auth);
  // }, [auth]);

  const recordDonation = async donation => {
    await donationService.save(donation);
    donorStore.setDonors(prev => {
      return prev.map(d => {
        if (d.id !== donation.donor_id) return d;
        d.total_donations = d.total_donations + donation.amount;
        return d;
      });
    });
    campaignStore.setCampaigns(prev => {
      return prev.map(c => {
        if (c.id !== donation.campaign_id) return c;
        c.funds_received = c.funds_received + donation.amount;
        return c;
      });
    });
  };

  const donationStore = {
    save: recordDonation
  };

  return (
    <AppDataContext.Provider value={{ auth, donorStore, campaignStore, donationStore }}>
      {children}
    </AppDataContext.Provider>
  );
};

export { AppDataProvider, AppDataContext };
