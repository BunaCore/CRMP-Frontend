'use client';

import { useEffect } from 'react';
import { useInitializeAuth } from '@/lib/api/auth/queries';

/**
 * AuthInitializer: Runs on app startup
 * - Fetches /auth/me to restore auth state
 * - Updates Zustand store with user data
 * - Shows loading state while checking authentication
 */
export function AuthInitializer({ children }: { children: React.ReactNode }) {
  const { isLoading, error } = useInitializeAuth();

  useEffect(() => {
    // Optional: Log auth state changes
    if (error) {
      console.log('Auth check failed (user likely not logged in):', error);
    }
  }, [error]);

  // Optionally show a splash screen while checking auth
  // For now, just render children (forms can redirect as needed)
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
}
