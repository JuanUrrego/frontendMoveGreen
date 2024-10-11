import axios from 'axios';

export const axiosConfiguration = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:4000', // URL base del backend
    headers: {
        'Content-Type': 'application/json'
    }
});