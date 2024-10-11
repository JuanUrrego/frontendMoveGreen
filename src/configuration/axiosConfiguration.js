import axios from 'axios';

export const axiosConfiguration = axios.create({
    baseURL: 'http://localhost:4000/', // Asegúrate de que esta URL sea correcta
    headers: {
        'Content-Type': 'application/json'
    }
});