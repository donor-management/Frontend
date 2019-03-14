import React, { useEffect } from 'react';
import useDonorService from '../hooks/useDonorService';
import useCampaignService from '../hooks/useCampaignService';
// import useDonationService from '../hooks/useDonationService';

const AppDataContext = React.createContext();

const AppDataProvider = ({ children }) => {
  const [donors, donorActions] = useDonorService();
  const [campaigns, campaignActions] = useCampaignService();
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
    console.log('donors :', donors);
  }, [donors]);
  useEffect(() => {
    console.log('campaigns :', campaigns);
  }, [campaigns]);
  // useEffect(() => {
  //   console.log('donations :', donations);
  // }, [donations]);

  return (
    <AppDataContext.Provider value={{ donors, donorActions, campaigns, campaignActions }}>
      {children}
    </AppDataContext.Provider>
  );
};

export { AppDataProvider, AppDataContext };
