import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardLayout } from '@/components/layouts/DashboardLayout';

export default function CoordinatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </SidebarProvider>
  );
}
