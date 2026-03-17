"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function SiteHeader() {
  return (
    <header className="flex h-[64px] shrink-0 items-center border-b bg-white">
      <div className="flex w-full items-center gap-2 px-4 lg:px-6">

        {/* Sidebar Toggle */}
        <SidebarTrigger className="-ml-1" />

        <Separator
          orientation="vertical"
          className="mx-2 h-4"
        />

        {/* Title Section */}
        <div className="flex flex-col">
          <h1 className="text-sm sm:text-base font-medium">
            Welcome back, Dr. Abebe
          </h1>

          <p className="hidden sm:block text-xs sm:text-sm text-gray-400 font-light">
            Here is what is happening with your research today.
          </p>
        </div>

        {/* Right Actions */}
        <div className="ml-auto flex items-center gap-2">

          {/* Hide on small screens */}
          <Button
            variant="ghost"
            asChild
            size="sm"
            className="hidden sm:flex"
          >
            <a
              href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>

        </div>
      </div>
    </header>
  )
}