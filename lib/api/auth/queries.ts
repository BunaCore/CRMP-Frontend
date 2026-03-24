import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api/client';
import { handleApiError } from '@/lib/api/errors';
import { authResponseSchema } from './types';

/**
 * Get current user info
 * GET /auth/me
 */
export function useCurrentUser() {
  return useQuery({
    queryKey: ['auth', 'current-user'],
    queryFn: async () => {
      try {
        const response = await apiClient.get('/auth/me');
        return authResponseSchema.parse(response.data);
      } catch (error) {
        handleApiError(error);
      }
    },
    retry: false,
    enabled: !!localStorage.getItem('authToken'), // Only fetch if token exists
  });
}

/**
 * Check if user is authenticated
 */
export function useIsAuthenticated() {
  const { data } = useCurrentUser();
  return !!data;
}
