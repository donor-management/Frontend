import { useState } from 'react';
import campaignService from '../services/campaignService';

const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCampaigns = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await campaignService.getAll();
      setCampaigns(
        data
          .map(i => i.campaign)
          .sort((a, b) => {
            const goalGapA = a.cash_goal - a.funds_received;
            const goalGapB = b.cash_goal - b.funds_received;
            return goalGapA - goalGapB;
          })
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsLoading(false);
    }
  };

  const saveCampaign = async campaign => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await campaignService.save(campaign);
      setCampaigns(prev => [data.campaign, ...prev]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsLoading(false);
    }
  };

  const updateCampaign = async campaign => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await campaignService.save(campaign);
      setCampaigns(
        campaigns.map(c => {
          if (c.id !== data.campaign.id) return c;
          return data.campaign;
        })
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsLoading(false);
    }
  };

  const deleteCampaign = async id => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await campaignService.delete(id);
      if (data === 1) {
        setCampaigns(campaigns.filter(c => c.id !== id));
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    campaigns,
    setCampaigns,
    isLoading,
    error,
    getAll: getCampaigns,
    save: saveCampaign,
    update: updateCampaign,
    delete: deleteCampaign
  };
};

export default useCampaigns;
