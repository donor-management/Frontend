import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/api/donations';

function donationsUrl(donorId) {
  return `/api/donors/${donorId}/donations`;
}

function donationUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getDonations(donorId) {
  return http.get(donationsUrl(donorId));
}

// export function getCampaign(campaignId) {
//   return http.get(campaignUrl(campaignId));
// }

export function saveDonation(donation) {
  // if (campaign.id) {
  //   const body = { ...campaign };
  //   delete body.id;
  //   return http.put(campaignUrl(campaign.id), body);
  // }

  return http.post(apiEndpoint, donation);
}

export function deleteDonation(donationId) {
  return http.delete(donationUrl(donationId));
}

export default {
  getAll: getDonations,
  // get: getCampaign,
  save: saveDonation,
  // update: saveCampaign,
  delete: deleteDonation
};
