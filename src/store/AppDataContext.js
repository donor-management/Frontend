import React, { useEffect, useState } from 'react';
import campaignService from '../services/campaignService';
import useDonorService from '../hooks/useDonorService';
import useCampaignService from '../hooks/useCampaignService';

const AppDataContext = React.createContext();

const AppDataProvider = ({ children }) => {
  const [donors, donorActions] = useDonorService();
  const [campaigns, campaignActions] = useCampaignService([]);
  const [appStatus, setAppStatus] = useState({
    isLoading: false,
    error: null
  });

  const toggleLoading = () => {
    setAppStatus(prev => ({
      ...prev,
      isLoading: !prev.isLoading
    }));
  };

  return (
    <AppDataContext.Provider value={{ donors, donorActions, campaigns, campaignActions }}>
      {children}
    </AppDataContext.Provider>
  );
};

export { AppDataProvider, AppDataContext };
