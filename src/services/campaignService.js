import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/api/campaigns';

// campaign shape
// {
//     "id": 1,
//     "org_id": 1,
//     "title": "Adaptive eco-centric internet solution",
//     "cause": "Pre-emptive",
//     "description": "Officiis nostrum nesciunt necessitatibus. Veniam quis eum",
//     "cash_goal": 30510,
//     "funds_received": 158,
//     "active_campaign": 1
//   }

function campaignUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getCampaigns() {
  return http.get(apiEndpoint);
}

export function getCampaign(campaignId) {
  return http.get(campaignUrl(campaignId));
}

export function saveCampaign(campaign) {
  if (campaign.id) {
    const body = { ...campaign };
    delete body.id;
    return http.put(campaignUrl(campaign.id), body);
  }

  return http.post(apiEndpoint, campaign);
}

export function deleteCampaign(campaignId) {
  return http.delete(campaignUrl(campaignId));
}

export default {
  getAll: getCampaigns,
  get: getCampaign,
  save: saveCampaign,
  // update: saveCampaign,
  delete: deleteCampaign
};
