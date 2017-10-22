import axios from 'axios';
import { API_ENDPOINT } from 'react-native-dotenv';

const instance = axios.create({
  timeout: 1000,
  baseURL: API_ENDPOINT,
});

export function login (username, password) {
  return instance.post('/auth/login', {
    data: {
      username,
      password,
    },
  });
}

export function getPerson (id) {
  return instance.get(`/person/${id}`);
}

export function getCampaign (id) {
  return instance.get(`/campaigns/${id}`);
}

export function getCampaigns () {
  return instance.get('/campaigns/browse');
}

export default {
  login,
  getPerson,
  getCampaign,
  getCampaigns,
}
