import { SidebarProvider } from '@/components/ui/sidebar';

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
