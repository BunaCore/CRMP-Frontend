import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function DashboardSidebar() {
  return (
    <div className="flex flex-col gap-5 w-80 h-full px-4 py-18">
      <Card className="border border-red-500 bg-red-50 shadow-sm rounded-xl">
        <CardContent className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-red-700 font-semibold text-sm">High-Value Escalation</span>
            <span className="text-red-500 text-xs uppercase font-bold">Urgent</span>
          </div>
          <p className="text-sm text-red-700">
            A procurement request for <strong>750,000 ETB</strong> in Project ASTU-R-04 exceeds the standard threshold.
          </p>
          <div className="flex gap-2">
            <Button variant="destructive" size="sm" className="flex-1">
              Review Now
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              Dismiss
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quarterly Report Due */}
      <Card className="border border-gray-200 bg-white shadow-sm rounded-xl">
        <CardContent className="p-4 space-y-2">
          <span className="text-gray-900 font-semibold text-sm">Quarterly Report Due</span>
          <p className="text-gray-600 text-sm">
            The Q3 progress report for <strong>"Smart Grid Optimization"</strong> is due in 3 days.
          </p>
        </CardContent>
      </Card>

      {/* Active Collaborations */}
      <Card className="bg-blue-600 text-white shadow-sm rounded-xl">
        <CardContent className="p-4 space-y-3">
          <span className="font-semibold text-sm">Active Collaborations</span>
          <div className="flex items-center gap-2">
            <img src="/avatars/user1.png" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
            <img src="/avatars/user2.png" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
            <img src="/avatars/user3.png" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
            <span className="text-sm font-medium">+18 More</span>
          </div>
          <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
            Open Team Workspace
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}