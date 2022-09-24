import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4200',
});

export default axiosInstance;
