import { useMutation } from '@tanstack/react-query';
import { SignUpFormData, SignInFormData } from '@/types/auth';
import { apiClient } from '@/lib/api/client';
import { handleApiError } from '@/lib/api/errors';
import { signUpResponseSchema, signInResponseSchema } from './types';

/**
 * Sign up mutation
 * POST /auth/signup
 */
export function useSignUp() {
  return useMutation({
    mutationFn: async (data: SignUpFormData) => {
      try {
        const response = await apiClient.post('/auth/signup', data);
        const validated = signUpResponseSchema.parse(response.data);

        // Store token in localStorage
        if (validated.token) {
          localStorage.setItem('authToken', validated.token);
        }

        return validated;
      } catch (error) {
        handleApiError(error);
      }
    },
  });
}

/**
 * Sign in mutation
 * POST /auth/signin
 */
export function useSignIn() {
  return useMutation({
    mutationFn: async (data: SignInFormData) => {
      try {
        const response = await apiClient.post('/auth/signin', data);
        const validated = signInResponseSchema.parse(response.data);

        // Store token in localStorage
        if (validated.token) {
          localStorage.setItem('authToken', validated.token);
        }

        return validated;
      } catch (error) {
        handleApiError(error);
      }
    },
  });
}

/**
 * Sign out helper (removes token)
 */
export function useSignOut() {
  return useMutation({
    mutationFn: async () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
      }
      return null;
    },
  });
}
