import axios from 'axios';

const api = axios.create({
  baseURL: 'https://two025-challkathon-itworks-be-xrja.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
