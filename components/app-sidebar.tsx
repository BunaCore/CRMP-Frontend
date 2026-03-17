'use client'

import * as React from "react"
import {
  IconDashboard,
  IconFolder,
  IconPlus,
  IconReport,
  IconSettings,
  IconUsers,
  IconMenu2,
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
    { title: "Dashboard", url: "#", icon: IconDashboard },
    { title: "New Proposal", url: "#", icon: IconPlus },
    { title: "My Projects", url: "#", icon: IconFolder },
    { title: "Grants", url: "#", icon: IconDashboard },
    { title: "Team", url: "#", icon: IconUsers },
    { title: "Reports", url: "#", icon: IconReport },
  ],
  navSecondary: [
    { title: "Settings", url: "#", icon: IconSettings },
  ],
}

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const [active, setActive] = React.useState("Dashboard")
  const [open, setOpen] = React.useState(false)

  const navItems = data.navMain.map((item) => ({
    ...item,
    isActive: active === item.title,
    onClick: () => {
      setActive(item.title)
      setOpen(false) // close mobile sidebar on click
    },
  }))

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b bg-white">
        <button onClick={() => setOpen(true)}>
          <IconMenu2 size={22} />
        </button>

        <span className="font-semibold text-sm">ASTU CRMP</span>
      </div>

      {/* FIXED SIDEBAR */}
      <Sidebar
        collapsible="icon"
        className={`
          fixed top-0 left-0 h-full w-64 z-50
          bg-white border-r border-gray-200
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0
        `}
        {...props}
      >
        {/* HEADER */}
        <SidebarHeader className="py-4">
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
                  <span className="leading-tight hidden md:block">
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
        <SidebarContent className="flex flex-col gap-6 py-4">
          <NavMain items={navItems} />
          <NavSecondary items={data.navSecondary} className="mt-auto" />
        </SidebarContent>

        {/* FOOTER */}
        <SidebarFooter className="pt-4 border-t">
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      {/* OVERLAY (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}