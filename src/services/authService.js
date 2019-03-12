import jwtDecode from 'jwt-decode';
import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/api/login';
const tokenKey = 'token';

http.setToken(getToken());

export async function login(username, password) {
  const { data } = await http.post(apiEndpoint, { username, password });
  localStorage.setItem(tokenKey, data.token);
}

export function loginWithToken(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getToken() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithToken,
  logout,
  getCurrentUser,
  getToken
};
