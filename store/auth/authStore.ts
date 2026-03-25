import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthUser } from '@/lib/api/auth/types';

interface AuthState {
  access_token: string | null;
  user: AuthUser | null;
  isAuthenticated: boolean;

  // Actions
  login: (token: string, user: AuthUser) => void;
  logout: () => void;
  setUser: (user: AuthUser) => void;
  setToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      access_token: null,
      user: null,
      isAuthenticated: false,

      login: (token: string, user: AuthUser) => {
        set({
          access_token: token,
          user,
          isAuthenticated: true,
        });
      },

      logout: () => {
        set({
          access_token: null,
          user: null,
          isAuthenticated: false,
        });
      },

      setUser: (user: AuthUser) => {
        set({ user });
      },

      setToken: (token: string) => {
        set({ access_token: token });
      },
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({
        access_token: state.access_token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
