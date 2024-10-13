import axios from 'axios';

export const axiosConfiguration = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'https://movegreenbankend-production.up.railway.app/', // URL base del backend
    headers: {
        'Content-Type': 'application/json'
    }
});