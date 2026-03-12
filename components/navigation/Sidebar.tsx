'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Home, FileText, CheckCircle2, Users, BarChart3, BookOpen, LogOut } from 'lucide-react';

const navItems = {
  coordinator: [
    { href: '/coordinator', label: 'Dashboard', icon: Home },
    { href: '/coordinator/projects', label: 'Projects', icon: FileText },
    { href: '/coordinator/approvals', label: 'Approvals', icon: CheckCircle2 },
    { href: '/coordinator/users', label: 'Users', icon: Users },
  ],
  researcher: [
    { href: '/researcher', label: 'Dashboard', icon: Home },
    { href: '/researcher/submissions', label: 'Submissions', icon: FileText },
    { href: '/researcher/feedback', label: 'Feedback', icon: CheckCircle2 },
  ],
  examiner: [
    { href: '/examiner', label: 'Dashboard', icon: Home },
    { href: '/examiner/assigned', label: 'Assigned Projects', icon: FileText },
    { href: '/examiner/evaluations', label: 'Evaluations', icon: CheckCircle2 },
  ],
  advisor: [
    { href: '/advisor', label: 'Dashboard', icon: Home },
    { href: '/advisor/mentees', label: 'Mentee Projects', icon: BookOpen },
    { href: '/advisor/guidance', label: 'Guidance', icon: BarChart3 },
  ],
};

export function Sidebar() {
  const pathname = usePathname();
  const { currentUser, setCurrentUser } = useApp();

  if (!currentUser) return null;

  const items = navItems[currentUser.role];
  const Icon = Home;

  return (
    <aside className="w-64 border-r border-border bg-card flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-foreground">ASTU CRMP</h1>
        <p className="text-xs text-muted-foreground mt-1">{currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)}</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {items.map((item) => {
          const ItemIcon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          
          return (
            <Link key={item.href} href={item.href}>
              <button
  className={cn(
    "w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
    isActive
      ? "text-primary hover:bg-blue-100"
      : "text-foreground hover:bg-muted"
  )}
>
  <ItemIcon className="w-4 h-4" />
  {item.label}
</button>
            </Link>
          );
        })}
      </nav>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-border space-y-3">
        <div className="px-2">
          <p className="text-xs font-medium text-muted-foreground">Signed in as</p>
          <p className="text-sm font-medium text-foreground truncate">{currentUser.name}</p>
          <p className="text-xs text-muted-foreground truncate">{currentUser.email}</p>
        </div>
        <Link href="/">
          <Button
            onClick={() => setCurrentUser(null)}
            variant="outline"
            className="w-full justify-start gap-2"
            size="sm"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </Link>
      </div>
    </aside>
  );
}
