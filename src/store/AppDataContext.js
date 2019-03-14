import React, { useEffect } from 'react';
import useDonors from '../hooks/useDonors';
import useCampaigns from '../hooks/useCampaigns';
// import useDonationService from '../hooks/useDonationService';

const AppDataContext = React.createContext();

const AppDataProvider = ({ children }) => {
  const donorStore = useDonors();
  const campaignStore = useCampaigns();
  // const [donations, donationActions] = useDonationService();
  // to handle errors in the future
  // const [appStatus, setAppStatus] = useState({
  //   isLoading: false,
  //   error: null
  // });

  // const toggleLoading = () => {
  //   setAppStatus(prev => ({
  //     ...prev,
  //     isLoading: !prev.isLoading
  //   }));
  // };

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
