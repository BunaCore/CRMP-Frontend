import { SidebarProvider } from '@/components/ui/sidebar';

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
