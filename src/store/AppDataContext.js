import React, { useEffect, useState } from 'react';
import campaignService from '../services/campaignService';
import useDonorService from '../hooks/useDonorService';

const AppDataContext = React.createContext();

const AppDataProvider = ({ children }) => {
  const [donors, donorActions] = useDonorService();
  const [campaigns, setCampaigns] = useState([]);
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

  const getCampaigns = async () => {
    const { data } = await campaignService.getAll();
    setCampaigns(data);
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <AppDataContext.Provider value={{ donors, donorActions, campaigns }}>
      {children}
    </AppDataContext.Provider>
  );
};

export { AppDataProvider, AppDataContext };
