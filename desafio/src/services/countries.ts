import axios from 'axios';

const ApiContries = axios.create({
  baseURL: 'https://restcountries.eu',
});

export default ApiContries;
