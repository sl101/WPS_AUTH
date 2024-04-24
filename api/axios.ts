import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sat7.faulio.com/api/v1/', 
});

export default api;
