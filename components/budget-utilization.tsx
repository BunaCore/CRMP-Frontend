"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2 } from "lucide-react"

export function BudgetUtilization() {
  return (
    <Card className="w-full rounded-lg border bg-white shadow-sm">
      <CardContent className="p-4 sm:p-5 space-y-4">

        {/* HEADER */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-gray-900">
              Budget Utilization
            </h2>
          </div>
          
        </div>

        {/* SPENT / TOTAL */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs text-gray-500 tracking-wide">SPENT</p>
            <p className="text-lg sm:text-xl font-semibold text-gray-900">
              5.4M <span className="text-gray-500 text-sm sm:text-base">ETB</span>
            </p>
          </div>

          <div className="sm:text-right">
            <p className="text-xs text-gray-500 tracking-wide">TOTAL</p>
            <p className="text-sm sm:text-base font-semibold text-gray-900">
              8.2M ETB
            </p>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <Progress value={65.8} className="h-2 sm:h-2.5 rounded-full bg-gray-200" />

        {/* FOOTER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
          <p className="text-gray-500 text-xs sm:text-sm">65.8% consumed</p>

          <div className="flex items-center gap-2 text-green-600 text-xs sm:text-sm">
            <CheckCircle2 className="size-4" />
            <span>Within Threshold</span>
          </div>
        </div>

      </CardContent>
    </Card>
  )
}