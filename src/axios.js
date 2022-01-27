import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-75de4.cloudfunctions.net/api', //API {cloud function} URL
  // baseURL: 'http://localhost:5001/clone-75de4/us-central1/api',
});

export default instance;
