import { SidebarProvider } from '@/components/ui/sidebar';

export default function DraftLayout({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
