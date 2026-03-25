'use client';

import { useEffect } from 'react';
import { useInitializeAuth } from '@/lib/api/auth/queries';
import { LoadingScreen } from '@/components/auth/LoadingScreen';

/**
 * AuthInitializer: Runs on app startup
 * - Fetches /auth/me to restore auth state
 * - Updates Zustand store with user data
 * - Shows loading screen while checking authentication
 */
export function AuthInitializer({ children }: { children: React.ReactNode }) {
  const { isLoading, error } = useInitializeAuth();

  useEffect(() => {
    // Optional: Log auth state changes
    if (error) {
      console.log('Auth check failed (user likely not logged in):', error);
    }
  }, [error]);

  // Show loading screen while checking auth
  if (isLoading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}
