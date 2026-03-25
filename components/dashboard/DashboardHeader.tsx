'use client';

import { SignOut, Bell } from 'phosphor-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useAuthStore } from '@/store/auth/authStore';

export function DashboardHeader() {
  const { user, logout } = useAuthStore();

  return (
    <header className="flex h-[64px] shrink-0 items-center border-b bg-white">
      <div className="flex w-full items-center gap-2 px-4 lg:px-6">
        {/* Sidebar Toggle */}
        <SidebarTrigger className="-ml-1" />

        <Separator orientation="vertical" className="mx-2 h-4" />

        {/* Title Section */}
        <div className="flex flex-col">
          <h1 className="text-sm sm:text-base font-medium">
            Welcome back, {user?.fullName || 'User'}
          </h1>
          <p className="hidden sm:block text-xs sm:text-sm text-gray-400 font-light capitalize">
            {user?.role ? `${user.role} Dashboard` : 'Dashboard'}
          </p>
        </div>

        {/* Right Actions */}
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hover:bg-muted">
            <Bell weight="regular" size={20} />
          </Button>

          <Separator orientation="vertical" className="mx-2 h-4" />

          <Button
            variant="ghost"
            size="sm"
            onClick={logout}
            className="hover:bg-destructive/10 hover:text-destructive"
            title="Sign out"
          >
            <SignOut weight="regular" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
}
