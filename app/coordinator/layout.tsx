import { DashboardLayout } from '@/components/layouts/DashboardLayout';

export default function CoordinatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
