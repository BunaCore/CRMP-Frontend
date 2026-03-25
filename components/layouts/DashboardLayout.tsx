'use client';

import { Sidebar } from '@/components/navigation/Sidebar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Separator } from '@/components/ui/separator';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { currentUser } = useApp();

  useEffect(() => {
    if (!currentUser) {
      router.push('/');
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return null;
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto flex flex-col">
        <header className="sticky top-0 bg-background/95 backdrop-blur-sm z-40">
          <div className="flex justify-between items-center px-8 py-4">
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-foreground">
                {currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)} Dashboard
              </h1>
            </div>
          
          </div>
          <Separator />
        </header>
        <div className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto w-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
