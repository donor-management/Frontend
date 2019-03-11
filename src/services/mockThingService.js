import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/thing';

function thingUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getThings() {
  return http.get(apiEndpoint);
}

export function getThing(thingId) {
  return http.get(thingUrl(thingId));
}

export function saveThing(thing) {
  if (thing._id) {
    const body = { ...thing };
    delete body._id;
    return http.put(thing(thing._id), body);
  }

  return http.post(apiEndpoint, thing);
}

export function deleteThing(thingId) {
  return http.delete(thingUrl(thingId));
}
