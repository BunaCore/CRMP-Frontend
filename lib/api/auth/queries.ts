import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api/client';
import { LoginResponse } from './types';
import { useAuthStore } from '@/store/authStore';

/**
 * Get current user info
 * GET /auth/me
 * Fetches the authenticated user from the backend
 */
export function useCurrentUser() {
  return useQuery({
    queryKey: ['auth', 'current-user'],
    queryFn: async (): Promise<LoginResponse> => {
      const response = await apiClient.get('/auth/me');
      return response.data;
    },
    retry: false,
    staleTime: Infinity, // User doesn't change often
    enabled: true, // Always attempt to fetch, backend will return 401 if not authenticated
  });
}

/**
 * Initialize auth on app startup
 * Fetches /auth/me and updates Zustand store if successful
 */
export function useInitializeAuth() {
  const { access_token, login } = useAuthStore();
  const { data, isLoading, error } = useCurrentUser();

  // Auto-login if /me returns a user
  if (data && !access_token) {
    login(data.access_token, data.user);
  }

  return { isLoading, isAuthenticated: !!data, error };
}
