"use client"

import * as React from "react"
import {
  IconCamera,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconFolder,
  IconPlus,
  IconReport,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import Image from "next/image"

const data = {
  user: {
    name: "Natnael Tilahun",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "New Proposal",
      url: "/draft",
      icon: IconPlus,
    },
    {
      title: "My Projects",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Grants",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Reports",
      url: "#",
      icon: IconReport,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
  ],
}

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const [active, setActive] = React.useState("Dashboard")

  const navItems = data.navMain.map((item) => ({
    ...item,
    isActive: active === item.title,
    onClick: () => setActive(item.title),
  }))

  return (
    <Sidebar collapsible="icon" {...props}>
      {/* HEADER */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="p-1.5">
              <a href="#" className="flex items-center gap-2">
                <Image
                  src="/logo.jpg"
                  alt="ASTU CRMP Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded"
                />
                <span className="leading-tight">
                  ASTU CRMP
                  <p className="text-xs text-muted-foreground">
                    Research Portal
                  </p>
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent>
        <NavMain items={navItems} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}