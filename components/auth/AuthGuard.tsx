'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth/authStore';

interface AuthGuardProps {
  children: React.ReactNode;
  requiredRoles?: string[];
}

/**
 * AuthGuard: Protects routes from unauthorized access
 * - Redirects to /login if not authenticated
 * - Optionally checks for specific roles
 */
export function AuthGuard({ children, requiredRoles }: AuthGuardProps) {
  const router = useRouter();
  const { isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    // Check authentication on mount
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    // Check roles if required
    if (requiredRoles && user) {
      const hasRequiredRole = requiredRoles.some((role) => user.roles.includes(role));

      if (!hasRequiredRole) {
        router.push('/unauthorized');
        return;
      }
    }
  }, [isAuthenticated, user, requiredRoles, router]);

  // Show nothing while checking auth (prevent flash of content)
  if (!isAuthenticated) {
    return null;
  }

  // Check role access
  if (requiredRoles && user) {
    const hasRequiredRole = requiredRoles.some((role) => user.roles.includes(role));
    if (!hasRequiredRole) {
      return null;
    }
  }

  return <>{children}</>;
}
