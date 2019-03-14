import jwtDecode from 'jwt-decode';
import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/api/login';
const tokenKey = 'token';

http.setToken(getToken());

export async function login(username, password) {
  const { data } = await http.post(apiEndpoint, { username, password });
  localStorage.setItem(tokenKey, data.token);
  http.setToken(data.token);
}

export function loginWithToken(token) {
  localStorage.setItem(tokenKey, token);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem(tokenKey);
    const user = jwtDecode(token);
    if (Date.now() / 1000 > user.exp) {
      logout();
      return null;
    } else {
      return jwtDecode(token);
    }
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
