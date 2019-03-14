import React, { useEffect } from 'react';
import useDonorService from '../hooks/useDonorService';
import useCampaignService from '../hooks/useCampaignService';
// import useDonationService from '../hooks/useDonationService';

const AppDataContext = React.createContext();

const AppDataProvider = ({ children }) => {
  const donorStore = useDonorService();
  const campaignStore = useCampaignService();
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
  // useEffect(() => {
  //   console.log('donations :', donations);
  // }, [donations]);

  return (
    <AppDataContext.Provider value={{ donorStore, campaignStore }}>
      {children}
    </AppDataContext.Provider>
  );
};

export { AppDataProvider, AppDataContext };
