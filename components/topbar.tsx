import { Bell } from "lucide-react"

export default function Topbar() {
  return (
    <div className="h-[60px] bg-white border-b flex items-center justify-between px-10">

      <div className="flex gap-8 text-[14px]">
        <span className="text-gray-500">Dashboard</span>
        <span className="text-cyan-600 font-medium">My Proposals</span>
        <span className="text-gray-500">Grants</span>
        <span className="text-gray-500">Reports</span>
      </div>

      <div className="flex items-center gap-6">

        <Bell className="w-5 h-5 text-gray-500"/>

        <div className="w-9 h-9 rounded-full border flex items-center justify-center">
          👤
        </div>

      </div>

    </div>
  )
}