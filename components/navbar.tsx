import { Bell } from "lucide-react"

export default function Navbar() {
  return (
    <div className="h-16 border-b bg-white flex items-center justify-between px-8">

      <div className="flex gap-8 text-sm">
        <span className="text-muted-foreground">Dashboard</span>
        <span className="font-medium text-primary">My Proposals</span>
        <span className="text-muted-foreground">Grants</span>
        <span className="text-muted-foreground">Reports</span>
      </div>

      <div className="flex items-center gap-6">
        <Bell className="w-5 h-5 text-muted-foreground"/>
        <div className="w-8 h-8 rounded-full bg-gray-200"/>
      </div>

    </div>
  )
}