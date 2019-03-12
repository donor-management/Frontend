import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/api/donors';

// donor shape
// {
//   "id": 4,
//   "org_id": 7,
//   "name": "Mr. Furman Wisoky",
//   "email": "Weston.Kovacek61@hotmail.com",
//   "last_contact": 1534362439284,
//   "total_donations": 233412
// }

function donorUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getDonors() {
  return http.get(apiEndpoint);
}

export function getDonor(donorId) {
  return http.get(donorUrl(donorId));
}

// requires: email, name, org_id
export function saveDonor(donor) {
  if (donor.id) {
    const body = { ...donor };
    delete body.id;
    return http.put(donorUrl(donor.id), body);
  }

  return http.post(apiEndpoint, donor);
}

export function deleteDonor(donorId) {
  return http.delete(donorUrl({ id: donorId }));
}
