import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cimatec-tcc.herokuapp.com/api/',
});

export default api;
