import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://cors-anywhere.herokuapp.com/https://aw-doaai-api.herokuapp.com/',
  baseURL: 'https://aw-doaai-api.herokuapp.com/',
  //baseURL: 'https://cors-anywhere.herokuapp.com/https://aw-doaai-api.herokuapp.com/',
});

export default api;