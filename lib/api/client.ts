import axios, { AxiosError, AxiosInstance } from 'axios';
import { useAuthStore } from '@/store/auth/authStore';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

/**
 * Shared HTTP client with interceptors for:
 * - Auth token handling
 * - Error standardization
 * - Base URL configuration
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request interceptor: Add auth token from Zustand store
 */
apiClient.interceptors.request.use(
  (config) => {
    const { access_token } = useAuthStore.getState();
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * Response interceptor: Handle errors globally
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Re-throw to let individual handlers deal with it
    return Promise.reject(error);
  },
);

export default apiClient;
