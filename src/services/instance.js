import axios from 'axios';

const Client = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    Accept: 'application/json',
  },
});

export default Client;
