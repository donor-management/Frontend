import { useState, useEffect, useContext } from 'react';
import campaignService from '../services/campaignService';
import { AuthContext } from '../store/AuthContext';

const useCampaignService = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);

  const getCampaigns = async () => {
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
  };

  useEffect(() => {
    if (user) {
      getCampaigns();
    } else {
      setCampaigns([]);
    }
  }, [user]);

  const saveCampaign = async campaign => {
    campaign.org_id = user.org_id;
    console.log(campaign);
    const { data } = await campaignService.save(campaign);
    setCampaigns(prev => [data.campaign, ...prev]);
  };

  const updateCampaign = async campaign => {
    const { data } = await campaignService.save(campaign);
    setCampaigns(
      campaigns.map(c => {
        if (c.id !== data.campaign.id) return c;
        return data.campaign;
      })
    );
  };

  const deleteCampaign = async id => {
    const { data } = await campaignService.delete(id);
    if (data === 1) {
      setCampaigns(campaigns.filter(c => c.id !== id));
    }
  };

  return [
    campaigns,
    {
      getAll: getCampaigns,
      save: saveCampaign,
      update: updateCampaign,
      delete: deleteCampaign
    }
  ];
};

export default useCampaignService;
