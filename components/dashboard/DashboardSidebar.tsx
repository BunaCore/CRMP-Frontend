'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import type { SidebarGroup as SidebarGroupType } from '@/lib/sidebar-config';

interface DashboardSidebarProps {
  groups: SidebarGroupType[];
  userRoles: string[];
}

export function DashboardSidebar({ groups }: DashboardSidebarProps) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar collapsible="icon">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2 border-b px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          title="CRMP"
        >
          <Image
            src="/crmp-c.svg"
            alt="CRMP Logo"
            width={32}
            height={32}
            className="w-8 h-8 shrink-0"
          />
          <span
            className={`font-semibold text-sm transition-all ${isCollapsed ? 'hidden' : 'block'}`}
          >
            CRMP
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <SidebarContent>
        {groups.map((group) => (
          <SidebarGroup key={group.group}>
            {!isCollapsed && (
              <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {group.group}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={isActive} title={item.label}>
                        <Link href={item.href}>
                          {Icon && <Icon size={20} weight="regular" className="shrink-0" />}
                          <span className={isCollapsed ? 'hidden' : 'inline'}>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
