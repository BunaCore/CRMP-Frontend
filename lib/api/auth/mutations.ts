import { useMutation } from '@tanstack/react-query';
import { SignUpFormData, SignInFormData } from '@/types/auth';
import { apiClient } from '@/lib/api/client';
import { handleApiError } from '@/lib/api/errors';
import { LoginResponse, SignUpResponse } from './types';
import { useAuthStore } from '@/store/auth/authStore';

/**
 * Sign up mutation
 * POST /auth/signup
 */
export function useSignUp() {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: async (data: SignUpFormData) => {
      const response = await apiClient.post<SignUpResponse>('/auth/signup', data);
      return response.data;
    },
    onSuccess: (data) => {
      login(data.access_token, data.user);
    },
    onError: (error) => {
      handleApiError(error);
    },
  });
}

/**
 * Sign in mutation
 * POST /auth/login
 */
export function useSignIn() {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: async (data: SignInFormData) => {
      const response = await apiClient.post<LoginResponse>('/auth/login', data);
      return response.data;
    },
    onSuccess: (data) => {
      login(data.access_token, data.user);
    },
    onError: (error) => {
      handleApiError(error);
    },
  });
}

/**
 * Sign out mutation
 */
export function useSignOut() {
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: async () => {
      // Optional: call logout endpoint on backend
      // await apiClient.post('/auth/logout');
      return null;
    },
    onSuccess: () => {
      logout();
    },
  });
}
