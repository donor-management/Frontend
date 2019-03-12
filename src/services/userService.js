// import jwtDecode from 'jwt-decode';
import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/api/register';

// new user object
// {
//   "username": "string",
//   "password": "string",
//   "email": "string",
//   "org_name": "string"
// }

export function register({ username, password, email, organization }) {
  const newUser = {
    username,
    password,
    email,
    org_name: organization
  };
  // better to get back token and log user in
  return http.post(apiEndpoint, newUser);
}
