import axios from 'axios';
import { getStrapiBaseURL } from '../config';
import { logErrorSecurely } from '../utils/security';

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
        // Sentinel: Prevent information leakage in production by using secure logging
        logErrorSecurely('API Error', error, error.response?.status);
        return Promise.reject(error);
    }
);
