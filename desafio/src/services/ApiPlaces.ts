import axios from 'axios';

const ApiPlaces = axios.create({
  baseURL: 'http://localhost:3003',
});

export default ApiPlaces;
