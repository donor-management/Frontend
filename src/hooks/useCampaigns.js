import { useState } from 'react';
import campaignService from '../services/campaignService';

const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestWrapper = cb => async (...args) => {
    setIsLoading(true);
    setError(null);
    try {
      await cb(...args);
      setIsLoading(false);
    } catch (error) {
      setError(error.request.data);
      setIsLoading(false);
    }
  };

  const getCampaigns = requestWrapper(async () => {
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
  });

  const saveCampaign = requestWrapper(async campaign => {
    const { data } = await campaignService.save(campaign);
    setCampaigns(prev => [data.campaign, ...prev]);
  });

  const updateCampaign = requestWrapper(async campaign => {
    const { data } = await campaignService.save(campaign);
    setCampaigns(
      campaigns.map(c => {
        if (c.id !== data.campaign.id) return c;
        return data.campaign;
      })
    );
  });

  const deleteCampaign = requestWrapper(async id => {
    const { data } = await campaignService.delete(id);
    if (data === 1) {
      setCampaigns(campaigns.filter(c => c.id !== id));
    }
  });

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
