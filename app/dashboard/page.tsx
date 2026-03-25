import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { BudgetUtilization } from "@/components/budget-utilization"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboardSidebar"

import data from "./data.json"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 65)",
          "--header-height": "calc(var(--spacing) * 20)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />

      <SidebarInset>
        <SiteHeader />

        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">

            {/* Section Cards */}
            <div className="px-4 lg:px-6">
              <SectionCards />
            </div>

            {/* Budget Utilization */}
            <div className="px-20 lg:px-6">
              <div
                className="w-full"
                style={{
                  transform: "scaleY(0.)",
                  transformOrigin: "top",
                }}
              >
                <BudgetUtilization />
              </div>
            </div>

            <div className="px-4 lg:px-6">
              <div className="flex flex-col xl:flex-row gap-6 w-full">

               
                <div className="flex-1 min-w-0">
                  <DataTable data={data} />
                </div>

                <div className="w-full xl:w-[300px] scale-95 origin-top">
                  <DashboardSidebar />
                </div>

              </div>
            </div>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}