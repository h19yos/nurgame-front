import axios from 'axios';

// Create Axios instance
const axiosConfig = axios.create({
    baseURL: 'https://c273-5-34-4-103.ngrok-free.app/api', // Replace with your API base URL
    timeout: 10000, // Optional timeout
});

export default axiosConfig;
