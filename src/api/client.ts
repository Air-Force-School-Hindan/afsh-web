import axios from 'axios';
import { getStrapiBaseURL } from '../config';

const STRAPI_URL = getStrapiBaseURL();

export const apiClient = axios.create({
    baseURL: STRAPI_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 seconds timeout
});

// Response Interceptor
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Sentinel: Prevent information leakage in production by only logging status codes
        if (import.meta.env.DEV) {
            console.error('API Error:', error.response?.status, error.message, error.response?.data);
        } else {
            console.error('API Error:', error.response?.status || 'Unknown Status');
        }
        return Promise.reject(error);
    }
);
