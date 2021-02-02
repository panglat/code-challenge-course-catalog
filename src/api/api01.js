import axios from 'axios';

const api = axios.create({
  baseURL: 'https://web-interview-api-zc6obs.herokuapp.com',
  headers: { 'Content-Type': 'application/json' },
});

export const TEST_EMAIL = 'email@example.com';

export default api;
