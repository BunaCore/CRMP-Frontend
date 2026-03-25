import { House, Plus, FolderOpen, CreditCard, Users, FileText } from 'phosphor-react';
import type { IconProps } from 'phosphor-react';

export type UserRole = 'STUDENT' | 'SUPERVISOR' | 'PI' | 'EVALUATOR' | 'ADMIN' | 'ANY';

export interface SidebarItem {
  label: string;
  href: string;
  roles: UserRole[];
  icon?: React.ForwardRefExoticComponent<IconProps>;
}

export interface SidebarGroup {
  group: string;
  items: SidebarItem[];
}

export const sidebarConfig: SidebarGroup[] = [
  {
    group: 'Student',
    items: [
      {
        label: 'Dashboard',
        href: '/student',
        roles: ['STUDENT'],
        icon: House,
      },
      {
        label: 'New Proposal',
        href: '/student/proposal',
        roles: ['STUDENT'],
        icon: Plus,
      },
      {
        label: 'My Projects',
        href: '/student/projects',
        roles: ['STUDENT'],
        icon: FolderOpen,
      },
      {
        label: 'Grants',
        href: '/student/grants',
        roles: ['STUDENT'],
        icon: CreditCard,
      },
      {
        label: 'Team',
        href: '/student/team',
        roles: ['STUDENT'],
        icon: Users,
      },
      {
        label: 'Reports',
        href: '/student/reports',
        roles: ['STUDENT'],
        icon: FileText,
      },
    ],
  },
  {
    group: 'Supervisor',
    items: [
      {
        label: 'Dashboard',
        href: '/admin',
        roles: ['SUPERVISOR', 'PI'],
        icon: House,
      },
      {
        label: 'Assigned Students',
        href: '/admin/students',
        roles: ['SUPERVISOR', 'PI'],
        icon: Users,
      },
      {
        label: 'Review Queue',
        href: '/admin/reviews',
        roles: ['SUPERVISOR', 'PI'],
        icon: FileText,
      },
      {
        label: 'Meeting Schedule',
        href: '/admin/meetings',
        roles: ['SUPERVISOR', 'PI'],
        icon: Plus,
      },
    ],
  },
  {
    group: 'Examiner',
    items: [
      {
        label: 'Dashboard',
        href: '/admin',
        roles: ['EVALUATOR'],
        icon: House,
      },
      {
        label: 'Evaluation Rubrics',
        href: '/admin/rubrics',
        roles: ['EVALUATOR'],
        icon: FileText,
      },
      {
        label: 'Assigned Projects',
        href: '/admin/projects',
        roles: ['EVALUATOR'],
        icon: FolderOpen,
      },
      {
        label: 'Final Grading',
        href: '/admin/grading',
        roles: ['EVALUATOR'],
        icon: Plus,
      },
    ],
  },
  {
    group: 'Admin',
    items: [
      {
        label: 'Dashboard',
        href: '/admin',
        roles: ['ADMIN'],
        icon: House,
      },
      {
        label: 'User Management',
        href: '/admin/users',
        roles: ['ADMIN'],
        icon: Users,
      },
      {
        label: 'Department Settings',
        href: '/admin/departments',
        roles: ['ADMIN'],
        icon: Plus,
      },
      {
        label: 'System Logs',
        href: '/admin/logs',
        roles: ['ADMIN'],
        icon: FileText,
      },
    ],
  },
];

/**
 * Filter sidebar groups based on user roles
 * Only shows groups and items where user has matching roles
 */
export function filterSidebarByRoles(config: SidebarGroup[], userRoles: string[]): SidebarGroup[] {
  return config
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        // Show if 'ANY' is in roles
        if (item.roles.includes('ANY' as UserRole)) {
          return true;
        }
        // Show if user has at least one matching role
        return item.roles.some((role) => userRoles.includes(role));
      }),
    }))
    .filter((group) => group.items.length > 0); // Only show groups with visible items
}
