'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth/authStore';
import { AuthGuard } from '@/components/auth/AuthGuard';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { sidebarConfig, filterSidebarByRoles } from '@/lib/sidebar-config';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();

  // Role-based redirect logic
  useEffect(() => {
    if (!isAuthenticated || !user) return;

    // Redirect STUDENT to /student, others to /admin
    const targetRoute = user.roles.includes('STUDENT') ? '/student' : '/admin';

    // Only redirect if not already on a dashboard page
    if (window.location.pathname === '/dashboard' || window.location.pathname === '/(dashboard)') {
      router.push(targetRoute);
    }
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const filteredGroups = filterSidebarByRoles(sidebarConfig, user.roles);

  return (
    <AuthGuard>
      <SidebarProvider>
        <DashboardSidebar groups={filteredGroups} userRoles={user.roles} />
        <SidebarInset>
          <DashboardHeader />
          <main className="flex-1 overflow-auto">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </AuthGuard>
  );
}
